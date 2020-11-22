import { cloneDeep, maxBy, findIndex, assign, sortBy } from 'lodash';

import * as types from 'constants/actions/Items';

const initialState = [];

const addItem = (items, name) => {
  const maxId = maxBy(items, 'id')?.id || 0;
  const maxNumber = maxBy(items, 'number')?.number || 0;

  items.push({ id: maxId + 1, number: maxNumber + 1, name });

  return sortBy(items, ['number']);
}

const removeItem = (items, id) => {
  items.splice(findIndex(items, { id }), 1)

  return sortBy(items, ['number']);
}

const moveItem = (items, id, direction = 'down') => {
  const currIndex = findIndex(items, { id });
  const currItem = items[currIndex];
  const currNumber = currItem.number;

  const nextNumber = direction === 'down' ? currNumber + 1 : currNumber - 1;
  const nextIndex = findIndex(items, { number: nextNumber });
  const nextItem = items[nextIndex]

  items[currIndex] = assign({}, currItem, { number: nextNumber });
  items[nextIndex] = assign({}, nextItem, { number: currNumber });

  return sortBy(items, ['number']);
}

export default function (state = initialState, action) {
  const items = cloneDeep(state);

  switch (action.type) {
    case types.ADD_ITEM:
      return addItem(items, action.name);
    case types.REMOVE_ITEM:
      return removeItem(items, action.id);
    case types.MOVE_ITEM_UP:
      return moveItem(items, action.id, 'up');
    case types.MOVE_ITEM_DOWN:
      return moveItem(items, action.id);
    default:
      return state;
  }
}
