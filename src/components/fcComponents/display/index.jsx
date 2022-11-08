import { getExpression, getResult } from "@store/selectors";
import { ExpressionSection, ResultSection } from "@styles";
import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const expression = useSelector(getExpression);
  const result = useSelector(getResult);

  return (
    <>
      <ExpressionSection id="expression">{expression}</ExpressionSection>
      <ResultSection id="result">{result}</ResultSection>
    </>
  );
};

export default Display;
