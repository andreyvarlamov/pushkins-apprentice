import React from "react";
import { Container, Input } from "@material-ui/core";

import useStyles from "./PushkinEditorStyles";

function PushkinEditor() {
  const classes = useStyles();

  return (
    <div className={classes.editorContainerWrapper}>
      <Container maxWidth="md" className={classes.editorContainer}>
        <div className={classes.editorTextFieldWrapper}>
          <Input
            multiline
            rows={30}
            placeholder={"Start writing..."}
            fullWidth
            disableUnderline
            className={classes.textInput}
            classes={{ input: classes.textInputField }}
          />
        </div>
        <div className={classes._placeholderDiv}>
          <p>Test</p>
        </div>
      </Container>
    </div>
  );
}
export default PushkinEditor;
