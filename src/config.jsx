import React from "react";
import { useRoutes } from "react-router-dom";

import Layout from "./components/layout";
import HomeCC from "./pages/ccPages/home";
import ControlPanelCC from "./pages/ccPages/settings";
import HomeFC from "./pages/fcPages/home";
import ControlPanelFC from "./pages/fcPages/settings";

export const DynamicRoutes = () => {
  return useRoutes([
    { path: "/calculator", element: <Layout /> },
    { path: "/homefc", element: <HomeFC /> },
    { path: "/settingsfc", element: <ControlPanelFC /> },
    { path: "/homecc", element: <HomeCC /> },
    { path: "/settingscc", element: <ControlPanelCC /> },
  ]);
};
