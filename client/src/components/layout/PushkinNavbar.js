import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { testAction } from "../../redux/actions/testActions";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import useStyles from "./PushkinNavbarStyles";

function PushkinNavbar(props) {
  const classes = useStyles();

  const { test, testAction } = props;

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit">
          <MenuBookIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Pushkin's Apprentice {test.testValue}
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            testAction(test.testValue + 1);
          }}
        >
          Test
        </Button>
      </Toolbar>
    </AppBar>
  );
}

PushkinNavbar.propTypes = {
  test: PropTypes.object.isRequired,
  testAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    test: state.test,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testAction: value => dispatch(testAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PushkinNavbar);
