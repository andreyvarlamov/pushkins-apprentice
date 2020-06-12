import React from "react";

// import { Typography } from "@material-ui/core";

import PushkinNavbar from "../layout/PushkinNavbar";
import PushkinEditor from "../elements/PushkinEditor";

function PushkinHome() {
  return (
    <React.Fragment>
      <PushkinNavbar />
      <PushkinEditor />
    </React.Fragment>
  );
}

export default PushkinHome;
