import React from 'react';
import { useSelector } from 'react-redux';

import { getExpression, getResult } from '@store/selectors';
import { ExpressionSection, ResultSection } from '@styles';

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
