import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import CalculatorCC from '../components/ccComponents/calculator';
import { setExpression, setHistory, setResult } from '@store/reducer';
import { getExpression, getResult } from '@store/selectors';

class CalculatorContainer extends React.Component {
  render() {
    const { expression, result, changeResult, changeExpression, loadHistory } =
      this.props;
    return (
      <CalculatorCC
        expression={expression}
        result={result}
        changeResult={changeResult}
        changeExpression={changeExpression}
        loadHistory={loadHistory}
      />
    );
  }
}

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

CalculatorContainer.propTypes = {
  expression: PropTypes.string,
  changeResult: PropTypes.func,
  changeExpression: PropTypes.func,
  loadHistory: PropTypes.func,
  result: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculatorContainer);
