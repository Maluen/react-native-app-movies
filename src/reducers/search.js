const initialState = {
  term: '',
  loading: false,
  results: [],
};

export function search(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_TERM_CHANGE':
      return {
        ...state,
        term: action.value,
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_REQUEST_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    case 'SEARCH_REQUEST_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.results,
      };
    default:
      return state;
  }
}
