function add(section, item) {
  return {
    type: 'LIBRARY_ADD',
    section,
    item,
  };
}

function remove(section, item) {
  return {
    type: 'LIBRARY_REMOVE',
    section,
    item,
  };
}

export function listAdd(item) {
  return add('list', item);
}

export function listRemove(item) {
  return remove('list', item);
}

export function favoritesAdd(item) {
  return add('favorites', item);
}

export function favoritesRemove(item) {
  return remove('favorites', item);
}

export function rowLengthsChange() {
  return {
    type: 'LIBRARY_ROW_LENGTHS_CHANGE',
  };
}

export function navChange(nav) {
  return {
    type: 'LIBRARY_NAV_CHANGE',
    nav,
  };
}
