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
  const [highlightedText, setHighlightedText] = useState(null);
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    wordsDispatch({ type: "UPDATE_WORDS", payload: inputText });
  }, [inputText]);

  const handleWordClick = (e, word) => {
    setCurrentWord(word);
    setPopoverAnchor(e.currentTarget);
    setPopoverOpen(true);
  };

  const setHighlightedWord = word => {
    const splitLines = inputText.split(/\n/);

    let lastInLine = [];
    splitLines.forEach(element => {
      lastInLine.push(element.split(/ |,|\.|,|\?|!|&|x\d/).length);
    });

    const splitWords = inputText.split(/\n| |,|\.|,|\?|!|&|x\d/);
    setHighlightedText(
      <div className={classes.highlightedTextDiv}>
        {splitWords.map((currentWord, index) => {
          if (currentWord !== word)
            return (
              <span key={index}>
                {currentWord + (lastInLine.includes(index + 1) ? "\n" : " ")}
              </span>
            );
          else
            return (
              <React.Fragment key={index}>
                <span style={{ backgroundColor: "#AAFF00" }}>
                  {currentWord}
                </span>
                <span>{lastInLine.includes(index + 1) ? "\n" : " "}</span>
              </React.Fragment>
            );

          /* <React.Fragment key={index}>
            <span>{section}</span>
            {index !== splitWords.length - 1 ? (
              <React.Fragment>
                <span style={{ backgroundColor: "#AAAA00" }}>{word}</span>
                <span> </span>
              </React.Fragment>
            ) : null}
          </React.Fragment> */
        })}
      </div>
    );
    setShowHighlight(true);
  };

  const handleWordMouseOver = e => {
    const word = e.target.textContent;
    setHighlightedWord(word);
  };

  const handleWordMouseOut = e => {
    setShowHighlight(false);
    setHighlightedText("");
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
          {showHighlight ? (
            highlightedText
          ) : (
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
          )}
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
              onMouseOver={handleWordMouseOver}
              onMouseOut={handleWordMouseOut}
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
