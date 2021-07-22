import { createMuiTheme } from "@material-ui/core/styles";

/**
 * See https://material-ui.com/customization/default-theme/ for
 * the full list of built-in variables.
 */
const theme = createMuiTheme({});

export type Theme = typeof theme;

export default theme;
