/* we need our action types here*/
import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: null,
  isFetching: false,
};
export const charsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        error: null,
        isFetching: true,
      }
    case SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: action.payload,
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    default:
      return state;
  }
};
