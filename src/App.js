import ErrorBoundary from "@components/errorBoundary";
import { getCurrentTheme } from "@store/selectors";
import { StyledApp } from "@styles";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { DynamicRoutes } from "./config";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const theme = useSelector(getCurrentTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ErrorBoundary>
        <StyledApp>
          <DynamicRoutes />
        </StyledApp>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
