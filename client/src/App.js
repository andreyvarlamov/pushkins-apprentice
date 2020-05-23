import React from "react";
import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import { pushkin } from "./theme.js";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={pushkin}>
        <Typography variant="h1">Pushkin's Apprentice</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
