import CalculatorCC from "@components/ccComponents/calculator";
import DisplayCC from "@components/ccComponents/display";
import History from "@components/ccComponents/history";
import Layout from "@components/layout";
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
      <Layout>
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
      </Layout>
    );
  }
}

export default HomeCC;
