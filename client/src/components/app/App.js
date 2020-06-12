import React from "react";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { pushkin } from "../../theme.js";
import PushkinApp from "./PushkinApp";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <ThemeProvider theme={pushkin}>
          <PushkinApp />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
