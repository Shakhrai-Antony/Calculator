import PropTypes from 'prop-types';
import React from 'react';

import Layout from '@components/layout';
import { ClearHistory, Select, SettingsSection, Text, Title } from '@styles';

const ControlPanelCC = ({ resetHistory, changeTheme }) => {
  const handleClick = () => {
    resetHistory();
  };

  const handleChange = (e) => {
    changeTheme(e.currentTarget.value);
  };

  return (
    <Layout>
      <SettingsSection>
        <Title>Settings</Title>
        <Text>Choose Theme</Text>
        <form>
          <label>
            <Select
              defaultValue=""
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
        <ClearHistory onClick={handleClick}>Clear History</ClearHistory>
      </SettingsSection>
    </Layout>
  );
};

ControlPanelCC.propTypes = {
  resetHistory: PropTypes.func,
  changeTheme: PropTypes.func,
};

export default ControlPanelCC;
