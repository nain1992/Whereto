import { GET_ERRORS, CLEAR_ERRORS } from "../types/types";

const initialState = {
  errors: null,
};
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
