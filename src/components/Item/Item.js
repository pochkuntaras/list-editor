import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import TextBox from 'components/shared/TextBox';

const Item = ({ id, name, remove }) => (
  <li>
    <TextBox>{name}</TextBox>
    <Button color="red" onClick={() => remove(id)}>Remove</Button>
  </li>
);

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func,
};

Item.defaultProps = {
  name: '',
};

export default Item;
