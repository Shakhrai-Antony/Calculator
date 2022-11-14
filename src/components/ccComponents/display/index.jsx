import PropTypes from 'prop-types';
import React from 'react';

import { ExpressionSection, ResultSection } from '@styles';

const DisplayCC = ({ expression, result }) => {
  return (
    <>
      <ExpressionSection id="expression">{expression}</ExpressionSection>
      <ResultSection id="result">{result}</ResultSection>
    </>
  );
};

DisplayCC.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
};

export default DisplayCC;
