import * as types from 'constants/actions/Items';

export const addItem = ({ name, parentId }) => ({
  type: types.ADD_ITEM,
  name,
  parentId,
});
