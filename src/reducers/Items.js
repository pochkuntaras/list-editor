import { cloneDeep, maxBy, findIndex } from 'lodash';

import * as types from 'constants/actions/Items';

const initialState = [];

export default function (state = initialState, action) {
  const items = cloneDeep(state);

  switch (action.type) {
    case types.ADD_ITEM:
      const maxId = maxBy(items, 'id')?.id || 0;

      items.push({ id: maxId + 1, name: action.name });

      return items;
    case types.REMOVE_ITEM:
      items.splice(findIndex(items, { id: action.id }), 1)

      return items;
    default:
      return state;
  }
}
