import React from 'react';

import CalculatorContainer from '@components/ccComponents/calculator/container';
import DisplayContainer from '@components/ccComponents/display/container';
import HistoryContainer from '@components/ccComponents/history/container';
import Layout from '@components/layout';
import {
  CalculatorSection,
  DisplaySection,
  HistorySection,
  Wrapper,
} from '@styles';

class HomeCC extends React.Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <HistorySection>
            <HistoryContainer />
          </HistorySection>
          <CalculatorSection>
            <DisplaySection>
              <DisplayContainer />
            </DisplaySection>
            <CalculatorContainer />
          </CalculatorSection>
        </Wrapper>
      </Layout>
    );
  }
}

export default HomeCC;
