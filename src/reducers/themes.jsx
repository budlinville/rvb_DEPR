import {createMuiTheme} from '@material-ui/core/styles';

import {TOGGLE_THEME} from "../actions/action-types";

const themeReducer = (state={}, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return Object.assign({}, state, {
        theme: state.theme === "dark" ? "light" : "dark"
      });
    default:
      return state;
  }
}

export default themeReducer;

export const themeSelector = state => {
  return createMuiTheme({
    palette: {
      type: state.theme
    }
  });
}
