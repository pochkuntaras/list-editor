import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import TextBox from 'components/shared/TextBox';

import Items from 'components/Items';

const Item = ({
  id,
  parentId,
  name,
  first,
  last,
  addSublist,
  removeSublist,
  hasSublist,
  moveItemUp,
  moveItemDown,
  remove,
  newSublist,
}) => (
    <li>
      <TextBox>{name}</TextBox>
      {first && <Button onClick={() => moveItemUp({ id, parentId })}>&uarr;</Button>}
      {last && <Button onClick={() => moveItemDown({ id, parentId })}>&darr;</Button>}
      <Button onClick={() => addSublist(id)}>Add Sublist</Button>
      {hasSublist && <Button color="red" onClick={() => removeSublist(id)}>Remove Sublist</Button>}
      <Button color="red" onClick={() => remove(id)}>Remove</Button>
      <Items parentId={id} newSublist={newSublist} />
    </li>
  )

Item.propTypes = {
  id: PropTypes.number.isRequired,
  parentId: PropTypes.number,
  name: PropTypes.string.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
  addSublist: PropTypes.func,
  removeSublist: PropTypes.func,
  hasSublist: PropTypes.bool,
  moveItemUp: PropTypes.func,
  moveItemDown: PropTypes.func,
  remove: PropTypes.func,
  newSublist: PropTypes.bool,
};

Item.defaultProps = {
  name: '',
  parentId: null,
  first: false,
  last: false,
};

export default Item;
