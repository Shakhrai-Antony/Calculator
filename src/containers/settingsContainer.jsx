import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import ControlPanelCC from '@pages/ccPages/settings';
import { clearHistory, setThemeStatus } from '@store/reducer';
import { getCurrentTheme } from '@store/selectors';

class SettingsContainer extends React.Component {
  render() {
    const { resetHistory, changeTheme, theme } = this.props;
    return (
      <ControlPanelCC
        resetHistory={resetHistory}
        changeTheme={changeTheme}
        theme={theme}
      />
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

const mapStateToProps = (state) => {
  return {
    theme: getCurrentTheme(state),
  };
};

SettingsContainer.propTypes = {
  resetHistory: PropTypes.func,
  changeTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
