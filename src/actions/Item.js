import * as types from 'constants/actions/Items';

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id,
});

export const moveItemUp = (id) => ({
  type: types.MOVE_ITEM_UP,
  id,
});

export const moveItemDown = (id) => ({
  type: types.MOVE_ITEM_DOWN,
  id,
});
