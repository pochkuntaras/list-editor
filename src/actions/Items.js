import * as types from 'constants/actions/Items';

export const addItem = (name) => ({
  type: types.ADD_ITEM,
  name
});
