import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  root
);
