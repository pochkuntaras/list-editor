
import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Button = ({ type, children, onClick }) => (
  <button
    className="button button_blue"
    {...{ type, children, onClick }}
  />
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  children: 'New button',
};

export default Button;
