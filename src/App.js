import ErrorBoundary from "@components/errorBoundary/ErrorBoundary";
import Header from "@components/header/Header";
import HomeCC from "@pages/ccPages/home/HomeСС";
import ControlPanelCC from "@pages/ccPages/settings/SettingsCC";
import HomeFC from "@pages/fcPages/home/Home";
import ControlPanelFC from "@pages/fcPages/settings/Settings";
import { getCurrentTheme } from "@store/selectors/Selectors";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
`;
const darkTheme = {
  body: "#1c1c1c",
};
const lightTheme = {
  body: "#fff",
};

function App() {
  const theme = useSelector(getCurrentTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ErrorBoundary>
        <StyledApp>
          <Header />
          <Routes>
            <Route path="/homefc" element={<HomeFC />} />
            <Route path="/settingsfc" element={<ControlPanelFC />} />
            <Route path="/homecc" element={<HomeCC />} />
            <Route path="/settingscc" element={<ControlPanelCC />} />
          </Routes>
        </StyledApp>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
