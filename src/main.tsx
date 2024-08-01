import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./style/index.scss";
import router from "./router/router";
import { ThemeProvider, createTheme } from "@mui/material";
import store from "./store/store";
import { Provider } from "react-redux";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 612,
      md: 863,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
  palette: {
    primary: {
      main: "#343436",
    },
    secondary: {
      main: "#213047",
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
