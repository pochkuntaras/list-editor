import React from 'react';

import Item from 'components/Item';
import NewItem from 'components/NewItem';

import { map, filter, sortBy } from 'lodash';

const Items = ({ items, parentId, newSublist }) => {
  const subItems = sortBy(filter(items, { parentId }), ['number']);

  return (
    <ul>
      { map(subItems, (item) => (
        <Item
          key={item.id}
          parentId={parentId}
          first={item !== subItems[0]}
          last={item !== subItems[subItems.length - 1]}
          {...item}
        />
      ))}
      { newSublist && <NewItem parentId={parentId} /> }
    </ul>
  );
}

Items.defaultProps = {
  parentId: null,
  newSublist: true
};

export default Items;
