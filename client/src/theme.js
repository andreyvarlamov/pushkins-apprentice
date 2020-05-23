import { responsiveFontSizes, createMuiTheme } from "@material-ui/core";

const pushkinTheme = createMuiTheme({
  palette: {
    tempText: "red",
  },
});

export const pushkin = responsiveFontSizes(pushkinTheme);
