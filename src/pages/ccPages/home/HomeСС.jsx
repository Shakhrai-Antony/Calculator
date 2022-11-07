import CalculatorCC from "@components/ccComponents/calculator/CalculatorCC";
import DisplayCC from "@components/ccComponents/display/DisplayCC";
import History from "@components/ccComponents/history/History";
import {
  CalculatorSection,
  DisplaySection,
  HistorySection,
  Wrapper,
} from "@styles";
import React from "react";

class HomeCC extends React.Component {
  render() {
    return (
      <Wrapper>
        <HistorySection>
          <History />
        </HistorySection>
        <CalculatorSection>
          <DisplaySection>
            <DisplayCC />
          </DisplaySection>
          <CalculatorCC />
        </CalculatorSection>
      </Wrapper>
    );
  }
}

export default HomeCC;
