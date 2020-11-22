import React from 'react';

import Item from 'components/Item';
import NewItem from 'components/NewItem';

import { map } from 'lodash';

const Items = ({ items }) => (
  <ul>
    {map(items, (item) => <Item key={item.id} {...item} />)}
    <li><NewItem /></li>
  </ul>
);

export default Items;
