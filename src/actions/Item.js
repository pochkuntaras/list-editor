import * as types from 'constants/actions/Items';

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id,
});
