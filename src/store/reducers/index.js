import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, FETCH_AUTH_START, FETCH_AUTH_SUCCESS, FETCH_AUTH_FAILURE } from "../actions"

const initialState = {
  authToken: null,
  isLoading: false,
  cards: [1],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_AUTH_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        authToken: action.payload.access_token,
        isLoading: false,
        error: ""
      };
    case FETCH_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
