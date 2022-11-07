import { clearHistory, setThemeStatus } from "@store/reducer/CalculatorReducer";
import { ClearHistory, Select, SettingsSection, Text, Title } from "@styles";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

class ControlPanelCC extends React.Component {
  handleClick = () => {
    this.props.resetHistory();
  };

  handleChange = (e) => {
    this.props.changeTheme(e.currentTarget.value);
  };

  render() {
    return (
      <SettingsSection>
        <Title>Settings</Title>
        <Text>Choose Theme</Text>
        <form>
          <label>
            <Select
              defaultValue={""}
              onChange={this.handleChange}
              id="theme"
              name="theme"
            >
              <option disabled hidden value="">
                Choose Theme
              </option>
              <option id="light_theme" value="light">
                Light theme
              </option>
              <option id="dark_theme" value="dark">
                Dark theme
              </option>
            </Select>
          </label>
        </form>
        <ClearHistory onClick={this.handleClick}>Clear History</ClearHistory>
      </SettingsSection>
    );
  }
}

ControlPanelCC.propTypes = {
  resetHistory: PropTypes.func,
  changeTheme: PropTypes.func,
};

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

export default connect(null, mapDispatchToProps)(ControlPanelCC);
