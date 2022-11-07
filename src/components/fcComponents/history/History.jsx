import { setHistoryStatus } from "@store/reducer/CalculatorReducer";
import { getHistory } from "@store/selectors/Selectors";
import { getHistoryStatus } from "@store/selectors/Selectors";
import { HistoryBlock, HistoryButton, HistoryWrapper } from "@styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
