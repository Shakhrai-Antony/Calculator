import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHistoryStatus } from '@store/reducer';
import { getHistory, getHistoryStatus } from '@store/selectors';
import { HistoryBlock, HistoryButton, HistoryWrapper } from '@styles';

const History = () => {
  const history = useSelector(getHistory);
  const historyStatus = useSelector(getHistoryStatus);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setHistoryStatus(!historyStatus));
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

export default History;
