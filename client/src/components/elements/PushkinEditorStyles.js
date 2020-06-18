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
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  editorContainerWrapper: {
    flexGrow: "1",
    position: "relative",
  },
  editorTextFieldWrapper: {
    flex: "1 1 0px",
    marginRight: theme.spacing(2),
  },
  highlightedTextDiv: {
    ...theme.typography.body1,
    borderColor: "#A0A0A0",
    borderRadius: "5px",
    borderStyle: "solid",
    borderWidth: "1px",
    height: "100%",
    padding: theme.spacing(2),
    whiteSpace: "pre",
    overflow: "auto",
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
    display: "flex",
    flex: "1 1 0px",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    overflow: "auto",
  },
  wordP: {
    marginRight: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));
