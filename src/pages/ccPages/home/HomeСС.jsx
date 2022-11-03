import CalculatorCC from "@components/ccComponents/calculator/CalculatorCC";
import DisplayCC from "@components/ccComponents/display/DisplayCC";
import History from "@components/ccComponents/history/History";
import {
  CalculatorSection,
  DisplaySection,
  HistorySection,
  Wrapper,
} from "@pagesStyles/home/styles.home";
import { getCurrentTheme } from "@store/selectors/Selectors";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

class HomeCC extends React.Component {
  render() {
    return (
      <Wrapper theme={this.props.theme}>
        <HistorySection>
          <History theme={this.props.theme} />
        </HistorySection>
        <CalculatorSection theme={this.props.theme}>
          <DisplaySection theme={this.props.theme}>
            <DisplayCC theme={this.props.theme} />
          </DisplaySection>
          <CalculatorCC theme={this.props.theme} />
        </CalculatorSection>
      </Wrapper>
    );
  }
}

HomeCC.propTypes = {
  theme: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    theme: getCurrentTheme(state),
  };
};

export default connect(mapStateToProps)(HomeCC);
