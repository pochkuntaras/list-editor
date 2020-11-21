import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const TextField = ({ name, placeholder, value, onChange }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="input"
  />
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  value: '',
};

export default TextField;
