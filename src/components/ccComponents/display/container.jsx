import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import DisplayCC from './index';
import { getExpression, getResult } from '@store/selectors';

class DisplayContainer extends React.Component {
  render() {
    const { expression, result } = this.props;
    return <DisplayCC expression={expression} result={result} />;
  }
}

DisplayContainer.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    expression: getExpression(state),
    result: getResult(state),
  };
};

export default connect(mapStateToProps)(DisplayContainer);
