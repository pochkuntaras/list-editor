import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const TextBox = ({ children }) => (
  <span className="text-box">{children}</span>
);

TextBox.propTypes = {
  children: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  children: '',
};

export default TextBox;
