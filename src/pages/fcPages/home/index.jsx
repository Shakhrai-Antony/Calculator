import Calculator from "@components/fcComponents/calculator";
import Display from "@components/fcComponents/display";
import History from "@components/fcComponents/history";
import Layout from "@components/layout";
import {
  CalculatorSection,
  DisplaySection,
  HistorySection,
  Wrapper,
} from "@styles";
import React from "react";

const HomeFC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default HomeFC;
