import PropTypes from 'prop-types';
import React from 'react';

import { HistoryBlock, HistoryButton, HistoryWrapper } from '@styles';

const History = ({ history, historyStatus, changeHistoryStatus }) => {
  const handleClick = () => {
    changeHistoryStatus(!historyStatus);
  };

  return (
    <HistoryWrapper>
      <HistoryButton onClick={handleClick}>➛</HistoryButton>
      {historyStatus ? (
        <HistoryBlock>
          <h3>History</h3>
          {history.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </HistoryBlock>
      ) : null}
    </HistoryWrapper>
  );
};
History.propTypes = {
  history: PropTypes.array,
  historyStatus: PropTypes.bool,
  changeHistoryStatus: PropTypes.func,
};

export default History;
