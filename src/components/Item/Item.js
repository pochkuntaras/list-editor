import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import TextBox from 'components/shared/TextBox';

const Item = ({
  id,
  name,
  remove,
  moveItemUp,
  moveItemDown,
  showMoveItemUp,
  showMoveItemDown,
}) => (
    <li>
      <TextBox>{name}</TextBox>
      { showMoveItemUp && <Button onClick={() => moveItemUp(id)}>&uarr;</Button>}
      { showMoveItemDown && <Button onClick={() => moveItemDown(id)}>&darr;</Button>}
      <Button color="red" onClick={() => remove(id)}>Remove</Button>
    </li>
  );

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func,
  moveItemUp: PropTypes.func,
  moveItemDown: PropTypes.func,
  showMoveItemUp: PropTypes.bool,
  showMoveItemDown: PropTypes.bool,
};

Item.defaultProps = {
  name: '',
  showMoveItemUp: false,
  showMoveItemDown: false,
};

export default Item;
