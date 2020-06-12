import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  editorContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    paddingBottom: theme.spacing(10),
  },
  editorContainerWrapper: {
    flexGrow: "1",
    position: "relative",
  },
  editorTextFieldWrapper: {
    flex: "1 1 0px",
    marginRight: theme.spacing(2),
  },
  textInput: {
    borderColor: "#A0A0A0",
    borderRadius: "5px",
    borderStyle: "solid",
    borderWidth: "1px",
    height: "100%",
    padding: theme.spacing(2),
  },
  textInputField: {
    height: "100%",
  },
  _placeholderDiv: {
    borderColor: "#A0A0A0",
    borderRadius: "5px",
    borderStyle: "solid",
    borderWidth: "1px",
    flex: "1 1 0px",
    padding: theme.spacing(2),
  },
}));