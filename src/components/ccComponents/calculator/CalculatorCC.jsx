import {
  setExpression,
  setHistory,
  setResult,
} from "@store/reducer/CalculatorReducer";
import { getExpression } from "@store/selectors/Selectors";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { getResult } from "../../../store/selectors/Selectors";
import KeypadCC from "../keypad/KeypadCC";

class CalculatorCC extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => () => {
    const command = value(this.props.expression, this.props.result);
    const commandResultEntity = command.execute();
    this.props.changeExpression(commandResultEntity.expression);
    this.props.changeResult(commandResultEntity.result);
    this.props.loadHistory(command.getHistory());
  };

  render() {
    return <KeypadCC handleClick={this.handleClick} />;
  }
}

CalculatorCC.propTypes = {
  expression: PropTypes.string,
  changeResult: PropTypes.func,
  changeExpression: PropTypes.func,
  loadHistory: PropTypes.func,
  result: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    expression: getExpression(state),
    result: getResult(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeResult: (result) => {
      dispatch(setResult(result));
    },
    changeExpression: (expression) => {
      dispatch(setExpression(expression));
    },
    loadHistory: (history) => {
      dispatch(setHistory(history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorCC);
