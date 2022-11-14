import PropTypes from 'prop-types';
import React from 'react';

import KeypadCC from '../keypad';

const CalculatorCC = ({
  expression,
  result,
  changeResult,
  changeExpression,
  loadHistory,
}) => {
  const handleClick = (value) => () => {
    const command = value(expression, result);
    const commandResultEntity = command.execute();
    changeExpression(commandResultEntity.expression);
    changeResult(commandResultEntity.result);
    loadHistory(command.getHistory());
  };

  return <KeypadCC handleClick={handleClick} />;
};

CalculatorCC.propTypes = {
  expression: PropTypes.string,
  changeResult: PropTypes.func,
  changeExpression: PropTypes.func,
  loadHistory: PropTypes.func,
  result: PropTypes.string,
};

export default CalculatorCC;
