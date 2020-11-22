import {
  cloneDeep,
  maxBy,
  findIndex,
  find,
  forEach,
  assign,
  filter,
} from 'lodash';

import * as types from 'constants/actions/Items';

const initialState = [
  { id: 1, number: 1, parentId: null, name: 'Coffee', newSublist: false },
  { id: 2, number: 2, parentId: null, name: 'Tea', newSublist: false },
  { id: 3, number: 3, parentId: 2, name: 'Black tea', newSublist: false },
  { id: 4, number: 4, parentId: 2, name: 'Green tea', newSublist: false },
];

const addItem = (items, name, parentId) => {
  const subItems = filter(items, { parentId });
  const maxId = maxBy(items, 'id')?.id || 0;
  const maxNumber = maxBy(subItems, 'number')?.number || 0;

  items.push({
    id: maxId + 1,
    parentId,
    number: maxNumber + 1,
    name,
    newSublist: false,
  });

  return items;
}

const removeItem = (items, id) => {
  items.splice(findIndex(items, { id }), 1);

  forEach(filter(items, { parentId: id }), (item) => {
    removeItem(items, item.id);
  });

  return items;
}

const moveItem = (items, id, parentId, direction = 'down') => {
  const subItems = filter(items, { parentId });

  const currIndex = findIndex(items, { id });
  const currItem = items[currIndex];
  const currNumber = currItem.number;

  const nextItem = find(subItems, (subItem) => {
    if (direction === 'down') {
      return subItem.number > currNumber;
    } else {
      return subItem.number < currNumber;
    }
  });

  const nextNumber = nextItem.number;

  const nextIndex = findIndex(items, {
    parentId: nextItem.parentId,
    number: nextNumber
  });

  items[currIndex] = assign({}, currItem, { number: nextNumber });
  items[nextIndex] = assign({}, nextItem, { number: currNumber });

  return items;
}

const addSublist = (items, id) => {
  const itemIndex = findIndex(items, { id });
  const item = items[itemIndex];

  items[itemIndex] = assign({}, item, { newSublist: !item.newSublist })

  return items;
}

export default function (state = initialState, action) {
  const items = cloneDeep(state);

  switch (action.type) {
    case types.ADD_ITEM:
      return addItem(items, action.name, action.parentId);
    case types.REMOVE_ITEM:
      return removeItem(items, action.id);
    case types.MOVE_ITEM_UP:
      return moveItem(items, action.id, action.parentId, 'up');
    case types.MOVE_ITEM_DOWN:
      return moveItem(items, action.id, action.parentId);
    case types.ADD_SUBLIT:
      return addSublist(items, action.id)
    default:
      return state;
  }
}
