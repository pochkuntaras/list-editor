import React from 'react';

import Item from 'components/Item';
import NewItem from 'components/NewItem';

import { map } from 'lodash';

const Items = ({ items }) => (
  <ul>
    {map(items, (item) => (
      <Item
        key={item.id}
        showMoveItemUp={item !== items[0]}
        showMoveItemDown={item !== items[items.length - 1]}
        {...item}
      />
    ))}
    <li><NewItem /></li>
  </ul>
);

export default Items;
