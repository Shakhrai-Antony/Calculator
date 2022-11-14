import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import ControlPanelCC from '@pages/ccPages/settings';
import { clearHistory, setThemeStatus } from '@store/reducer';

class SettingsContainer extends React.Component {
  render() {
    const { resetHistory, changeTheme } = this.props;
    return (
      <ControlPanelCC resetHistory={resetHistory} changeTheme={changeTheme} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetHistory: () => {
      dispatch(clearHistory());
    },
    changeTheme: (theme) => {
      dispatch(setThemeStatus(theme));
    },
  };
};

SettingsContainer.propTypes = {
  resetHistory: PropTypes.func,
  changeTheme: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SettingsContainer);
