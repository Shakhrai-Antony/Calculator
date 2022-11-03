import {
  ExpressionSection,
  ResultSection,
} from "@componentsStyles/display/styles.display";
import { getExpression, getResult } from "@store/selectors/Selectors";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

class DisplayCC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ExpressionSection theme={this.props.theme} id="expression">
          {this.props.expression}
        </ExpressionSection>
        <ResultSection theme={this.props.theme} id="result">
          {this.props.result}
        </ResultSection>
      </>
    );
  }
}

DisplayCC.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    expression: getExpression(state),
    result: getResult(state),
  };
};

export default connect(mapStateToProps)(DisplayCC);
