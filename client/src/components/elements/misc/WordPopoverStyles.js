import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  popoverPaper: {
    padding: theme.spacing(2),
  },
  popoverText: {
    ...theme.typography.body2,
  },
  circularProgress: {
    marginTop: theme.spacing(1),
  },
}));
