import React, { useState, useReducer, useEffect } from "react";
import { Container, Input, Typography } from "@material-ui/core";

import useStyles from "./PushkinEditorStyles";

function PushkinEditor() {
  const classes = useStyles();

  const wordsReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_WORDS":
        return {
          ...state,
          split: [...new Set(action.payload.split(" "))],
        };
      default:
        return state;
    }
  };

  const [words, wordsDispatch] = useReducer(wordsReducer, { split: [] });
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    wordsDispatch({ type: "UPDATE_WORDS", payload: inputText });
  }, [inputText]);

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
            onChange={e => setInputText(e.target.value)}
            value={inputText}
          />
        </div>
        <div className={classes._placeholderDiv}>
          {words.split.map((word, index) => (
            <Typography variant="body2" key={index}>
              {word}
            </Typography>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default PushkinEditor;
