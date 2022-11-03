import Calculator from "@components/fcComponents/calculator/Calculator";
import Display from "@components/fcComponents/display/Display";
import History from "@components/fcComponents/history/History";
import { getCurrentTheme } from "@store/selectors/Selectors";
import React from "react";
import { useSelector } from "react-redux";

import {
  CalculatorSection,
  DisplaySection,
  HistorySection,
  Wrapper,
} from "./styles.home";

const HomeFC = () => {
  const theme = useSelector(getCurrentTheme);

  return (
    <Wrapper theme={theme}>
      <HistorySection>
        <History theme={theme} />
      </HistorySection>
      <CalculatorSection theme={theme}>
        <DisplaySection theme={theme}>
          <Display theme={theme} />
        </DisplaySection>
        <Calculator theme={theme} />
      </CalculatorSection>
    </Wrapper>
  );
};

export default HomeFC;
