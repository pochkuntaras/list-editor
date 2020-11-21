import React from 'react';

import NewItem from 'components/NewItem';

import { map } from 'lodash';

const Item = ({ id, name }) => (
  <li>
    <span>{name}</span>
  </li>
);

const Items = ({ items }) => (
  <ul>
    {map(items, (item) => <Item key={item.id} {...item} />)}
    <li><NewItem /></li>
  </ul>
);

export default Items;
