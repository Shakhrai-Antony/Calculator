import { getExpression, getResult } from "@store/selectors/Selectors";
import { ExpressionSection, ResultSection } from "@styles";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

class DisplayCC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { expression, result } = this.props;
    return (
      <>
        <ExpressionSection id="expression">{expression}</ExpressionSection>
        <ResultSection id="result">{result}</ResultSection>
      </>
    );
  }
}

DisplayCC.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    expression: getExpression(state),
    result: getResult(state),
  };
};

export default connect(mapStateToProps)(DisplayCC);
