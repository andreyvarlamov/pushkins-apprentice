import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Popover, Typography, CircularProgress } from "@material-ui/core";

import useStyles from "./WordPopoverStyles";

// Redux
import { getWordInfo } from "../../../redux/actions/wordInfoActions";

const WordPopover = props => {
  const classes = useStyles();

  const { word, isOpen, anchor, handleClose } = props;

  const {
    getWordInfo,
    wordInfo: { loading, currentDefinition },
  } = props;

  useEffect(() => {
    if (isOpen) getWordInfo(word);
  }, [isOpen]);

  return (
    <React.Fragment>
      <Popover
        open={isOpen}
        anchorEl={anchor}
        onClose={e => handleClose(e)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        classes={{ paper: classes.popoverPaper }}
      >
        <Typography className={classes.popoverText}>{word}</Typography>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={30} />
        ) : (
          <Typography className={classes.popoverText}>
            {currentDefinition}
          </Typography>
        )}
      </Popover>
    </React.Fragment>
  );
};

WordPopover.propTypes = {
  word: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  anchor: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  getWordInfo: PropTypes.func.isRequired,
  wordInfo: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  wordInfo: state.wordInfo,
});

const mapDispatchToProps = dispatch => ({
  getWordInfo: word => dispatch(getWordInfo(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordPopover);
