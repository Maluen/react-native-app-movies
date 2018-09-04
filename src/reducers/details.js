const initialState = {
  resultsById: {}, // <movie id, { loading, errorMessage, result }>
};

export function details(state = initialState, action) {
  switch (action.type) {
    case 'DETAILS_REQUEST':
      return {
        ...state,
        resultsById: {
          ...state.resultsById,
          [action.id]: {
            loading: true,
          },
        },
      };
    case 'DETAILS_REQUEST_FAILURE':
      return {
        ...state,
        resultsById: {
          ...state.resultsById,
          [action.id]: {
            ...state.resultsById[action.id],
            loading: false,
            errorMessage: action.errorMessage,
          },
        },
      };
    case 'DETAILS_REQUEST_SUCCESS':
      return {
        ...state,
        resultsById: {
          ...state.resultsById,
          [action.id]: {
            ...state.resultsById[action.id],
            loading: false,
            result: action.result,
          },
        },
      };
    default:
      return state;
  }
}
