import { calculate, replacePlusMinus } from "@store/calculations/Calculations";
import {
  setExpression,
  setHistory,
  setResult,
} from "@store/reducer/CalculatorReducer";
import { getExpression, getResult } from "@store/selectors/Selectors";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import KeyPad from "../keypad/KeyPad";

const Calculator = ({ theme }) => {
  const dispatch = useDispatch();
  const expression = useSelector(getExpression);
  const result = useSelector(getResult);

  const handleClick = (value) => () => {
    inputValue(value);
  };

  const inputValue = (value) => {
    switch (value) {
      case "=":
        if (expression.length === 0) break;
        // don't have expression nothing happened
        try {
          // if count of "(" !== ")" throw Error
          if (
            expression.match(/[()]/) &&
            expression.match(/[(]/g).length !== expression.match(/[)]/g).length
          ) {
            throw Error;
          }
          dispatch(setHistory(expression));
          dispatch(setResult(calculate(expression)));
        } catch {
          dispatch(setResult("Error"));
        }
        dispatch(setExpression(""));
        break;
      case "C":
        expression.length > 0
          ? dispatch(setExpression(expression.slice(0, -1)))
          : dispatch(setResult("0"));
        break;
      case "AC":
        dispatch(setExpression(""));
        dispatch(setResult("0"));
        break;
      case "+/-":
        /* eslint-disable */
        if (expression.length !== 0) {
          dispatch(setExpression(replacePlusMinus(expression)));
        }
        break;
      default:
        //if expression last index equal operator and current value equal operator slice expression till operator
        /* eslint-disable */
        if (
          expression.length !== 0 &&
          expression[expression.length - 1].match(/[%*\/\-+]/) &&
          value.match(/[%*\/\-+]/)
        ) {
          dispatch(
            setExpression(expression.slice(0, expression.length - 1) + value)
          );
          break;
        }
        /* eslint-disable */
        if (
          expression.length === 0 &&
          result !== "Error" &&
          result !== "0" &&
          result !== "NaN" &&
          value.match(/[%*\/\-+()=]/)
        ) {
          dispatch(setExpression(result + expression + value));
        }
        /* eslint-disable */
        if (expression.match(/[%*\/\-+=]/) && value.match(/[%*\-+=]/)) {
          dispatch(setResult(calculate(expression)));
          dispatch(setExpression(expression + value));
        } else {
          dispatch(setExpression(expression + value));
        }
    }
  };

  return <KeyPad handleClick={handleClick} theme={theme} />;
};

Calculator.propTypes = {
  theme: PropTypes.string,
};

export default Calculator;
