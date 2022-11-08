import { setExpression, setHistory, setResult } from "@store/reducer";
import { getExpression, getResult } from "@store/selectors";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import KeyPad from "../keypad";

const Calculator = () => {
  const dispatch = useDispatch();
  const expression = useSelector(getExpression);
  const result = useSelector(getResult);

  const handleClick = (value) => () => {
    const command = value(expression, result);
    const commandResultEntity = command.execute();
    dispatch(setExpression(commandResultEntity.expression));
    dispatch(setResult(commandResultEntity.result));
    dispatch(setHistory(command.getHistory()));
  };

  return <KeyPad handleClick={handleClick} />;
};

Calculator.propTypes = {
  theme: PropTypes.string,
};

export default Calculator;
