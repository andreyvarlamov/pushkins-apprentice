import {
  GET_WORDINFO,
  GET_DEFINITION,
  WORDINFO_LOADING,
} from "../actions/types";

const initialState = {
  currentDefinition: "",
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORDINFO:
    case GET_DEFINITION:
      return {
        ...state,
        currentDefinition: action.payload,
        loading: false,
      };
    case WORDINFO_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
