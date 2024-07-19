import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router";
import { ThemeProvider, createTheme } from "@mui/material";
import store from "./store/store";
import { Provider } from "react-redux";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 790,
      lg: 1200,
      xl: 1536,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
