import * as types from 'constants/actions/Items';

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id,
});

export const moveItemUp = ({ id, parentId }) => ({
  type: types.MOVE_ITEM_UP,
  id,
  parentId,
});

export const moveItemDown = ({ id, parentId }) => ({
  type: types.MOVE_ITEM_DOWN,
  id,
  parentId,
});

export const addSublist = (id) => ({
  type: types.ADD_SUBLIT,
  id,
});
