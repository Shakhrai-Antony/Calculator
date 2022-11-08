import { setHistoryStatus } from "@store/reducer";
import { getHistory } from "@store/selectors";
import { getHistoryStatus } from "@store/selectors";
import { HistoryBlock, HistoryButton, HistoryWrapper } from "@styles";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.changeHistoryStatus(!this.props.historyStatus);
  };

  render() {
    const { historyStatus, history } = this.props;
    return (
      <HistoryWrapper>
        <HistoryButton onClick={this.handleClick}>➛</HistoryButton>
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
  }
}

const mapStateToProps = (state) => {
  return {
    history: getHistory(state),
    historyStatus: getHistoryStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHistoryStatus: (historyStatus) => {
      dispatch(setHistoryStatus(historyStatus));
    },
  };
};

History.propTypes = {
  history: PropTypes.array,
  historyStatus: PropTypes.bool,
  changeHistoryStatus: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
