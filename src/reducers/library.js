const rowLengthValues = [2, 4, 1];

const initialState = {
  sections: {
    list: [],
    favorites: [],
  },
  rowLengths: {
    list: rowLengthValues[0],
    favorites: rowLengthValues[0],
  },
  nav: 'list',
};

export function library(state = initialState, action) {
  switch (action.type) {
    case 'LIBRARY_ADD': {
      const index = state.sections[action.section].findIndex(m => m.imdbID === action.item.imdbID);
      if (index !== -1) return state; // already added
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.section]: [
            ...state.sections[action.section],
            action.item,
          ],
        },
      };
    }
    case 'LIBRARY_REMOVE': {
      const index = state.sections[action.section].findIndex(m => m.imdbID === action.item.imdbID);
      if (index === -1) return state; // not found
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.section]: [
            ...state.sections[action.section].slice(0, index),
            ...state.sections[action.section].slice(index + 1),
          ],
        },
      };
    }
    case 'LIBRARY_ROW_LENGTHS_CHANGE': {
      const rowLength = state.rowLengths[state.nav];
      const index = (rowLengthValues.indexOf(rowLength) + 1) % rowLengthValues.length;
      const value = rowLengthValues[index];
      return {
        ...state,
        rowLengths: {
          ...state.rowLengths,
          [state.nav]: value,
        },
      };
    }
    case 'LIBRARY_NAV_CHANGE':
      return {
        ...state,
        nav: action.nav,
      };
    default:
      return state;
  }
}
