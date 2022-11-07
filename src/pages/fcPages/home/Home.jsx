import Calculator from "@components/fcComponents/calculator/Calculator";
import Display from "@components/fcComponents/display/Display";
import History from "@components/fcComponents/history/History";
import {
  CalculatorSection,
  DisplaySection,
  HistorySection,
  Wrapper,
} from "@styles";
import React from "react";

const HomeFC = () => {
  return (
    <Wrapper>
      <HistorySection>
        <History />
      </HistorySection>
      <CalculatorSection>
        <DisplaySection>
          <Display />
        </DisplaySection>
        <Calculator />
      </CalculatorSection>
    </Wrapper>
  );
};

export default HomeFC;
