import { clearHistory, setThemeStatus } from "@store/reducer/CalculatorReducer";
import { getCurrentTheme } from "@store/selectors/Selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ClearHistory,
  Select,
  SettingsSection,
  Text,
  Title,
} from "./styles.settings";

const ControlPanelFC = () => {
  const theme = useSelector(getCurrentTheme);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setThemeStatus(e.currentTarget.value));
  };

  const handleClick = () => {
    dispatch(clearHistory());
  };

  return (
    <SettingsSection>
      <Title theme={theme}>Settings</Title>
      <Text theme={theme}>Choose Theme</Text>
      <form>
        <label>
          <Select
            defaultValue={""}
            onChange={handleChange}
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
      <ClearHistory id="clear_history" onClick={handleClick}>
        Clear History
      </ClearHistory>
    </SettingsSection>
  );
};

export default ControlPanelFC;
