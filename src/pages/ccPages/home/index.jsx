import React from 'react';

import Layout from '@components/layout';
import CalculatorContainer from '@containers/calculatorContainer';
import DisplayContainer from '@containers/displayContainer';
import HistoryContainer from '@containers/historyContainer';
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
