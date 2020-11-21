import { cloneDeep, maxBy } from 'lodash';

import * as types from 'constants/actions/Items';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      const items = cloneDeep(state);
      const maxId = maxBy(items, 'id')?.id || 0;
      const nextId = maxId + 1

      items.push({ id: nextId, name: action.name });

      return items;
    default:
      return state;
  }
}
