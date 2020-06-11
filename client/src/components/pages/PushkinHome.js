import React from "react";

import { Typography } from "@material-ui/core";

import PushkinNavbar from "../layout/PushkinNavbar";

function PushkinHome() {
  return (
    <React.Fragment>
      <PushkinNavbar />
      <Typography variant="h1">Pushkin's Apprentice</Typography>
    </React.Fragment>
  );
}

export default PushkinHome;
