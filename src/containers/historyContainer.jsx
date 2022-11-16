import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import History from '../components/ccComponents/history';
import { setHistoryStatus } from '@store/reducer';
import { getHistory, getHistoryStatus } from '@store/selectors';

class HistoryContainer extends React.Component {
  render() {
    const { history, historyStatus, changeHistoryStatus } = this.props;
    return (
      <History
        history={history}
        historyStatus={historyStatus}
        changeHistoryStatus={changeHistoryStatus}
      />
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

HistoryContainer.propTypes = {
  history: PropTypes.array,
  historyStatus: PropTypes.bool,
  changeHistoryStatus: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
