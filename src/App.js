import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import MainRouter from "./routers/MainRouter";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";

export let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F88216", //default orange
    },
    secondary: {
      main: "#FBFBFB", //whitish bg
    },
    tertiary: {
      main: "#14213D", //dark blue - text & bg
    },
    defaultWhite: {
      main: "#FFF",
    },
    defaultBlack: {
      main: "#000",
    },
    text: {
      main: "#707070",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
