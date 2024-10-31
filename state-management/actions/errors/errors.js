import { CLEAR_ERRORS, GET_ERRORS } from "../../types/types";

export const getErrors = (payload) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload,
  });
};
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};
