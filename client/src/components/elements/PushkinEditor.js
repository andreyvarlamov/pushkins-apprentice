import React, { useState, useReducer, useEffect } from "react";
import { Container, Input, Typography } from "@material-ui/core";

import useStyles from "./PushkinEditorStyles";
import WordPopover from "./misc/WordPopover";

function PushkinEditor() {
  const classes = useStyles();

  const wordsReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_WORDS":
        return {
          ...state,
          split: [
            ...new Set(action.payload.split(/\n| |,|\.|,|\?|!|&|x\d/)),
          ].map(word => word.toLowerCase()),
        };
      default:
        return state;
    }
  };

  const [words, wordsDispatch] = useReducer(wordsReducer, { split: [] });
  const [inputText, setInputText] = useState("");
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    wordsDispatch({ type: "UPDATE_WORDS", payload: inputText });
  }, [inputText]);

  const handleWordClick = (e, word) => {
    setCurrentWord(word);
    setPopoverAnchor(e.currentTarget);
    setPopoverOpen(true);
  };

  const handleClose = e => {
    setCurrentWord("");
    setPopoverAnchor(null);
    setPopoverOpen(false);
  };

  return (
    <div className={classes.editorContainerWrapper}>
      <Container maxWidth="lg" className={classes.editorContainer}>
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
          <WordPopover
            word={currentWord}
            isOpen={popoverOpen}
            anchor={popoverAnchor}
            handleClose={handleClose}
          />
          {words.split.map((word, index) => (
            <Typography
              key={index}
              variant="body2"
              onClick={e => handleWordClick(e, word)}
              className={classes.wordP}
            >
              {word}
            </Typography>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default PushkinEditor;
