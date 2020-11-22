import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import TextBox from 'components/shared/TextBox';

import Items from 'components/Items';

const Item = ({
  id,
  parentId,
  name,
  moveItemUp,
  moveItemDown,
  first,
  last,
  addSublist,
  newSublist,
  remove,
}) => (
    <li>
      <TextBox>{name}</TextBox>
      {first && <Button onClick={() => moveItemUp({ id, parentId })}>&uarr;</Button>}
      {last && <Button onClick={() => moveItemDown({ id, parentId })}>&darr;</Button>}
      <Button onClick={() => addSublist(id)}>Add Sublist</Button>
      <Button color="red" onClick={() => remove(id)}>Remove</Button>
      <Items parentId={id} newSublist={newSublist} />
    </li>
  )

Item.propTypes = {
  id: PropTypes.number.isRequired,
  parentId: PropTypes.number,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func,
  moveItemUp: PropTypes.func,
  moveItemDown: PropTypes.func,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

Item.defaultProps = {
  name: '',
  parentId: null,
  first: false,
  last: false,
};

export default Item;
