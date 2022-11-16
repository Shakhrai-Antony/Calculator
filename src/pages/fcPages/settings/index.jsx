import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '@components/layout';
import { clearHistory, setThemeStatus } from '@store/reducer';
import { getCurrentTheme } from '@store/selectors';
import { ClearHistory, Select, SettingsSection, Text, Title } from '@styles';

const ControlPanelFC = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setThemeStatus(e.currentTarget.value));
  };

  const defaultTheme = useSelector(getCurrentTheme);

  const handleClick = () => {
    dispatch(clearHistory());
  };

  return (
    <Layout>
      <SettingsSection>
        <Title>Settings</Title>
        <Text>Choose Theme</Text>
        <form>
          <label>
            <Select
              defaultValue={defaultTheme}
              onChange={handleChange}
              id="theme"
              name="theme"
            >
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
    </Layout>
  );
};

export default ControlPanelFC;
