
import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Button = ({ type, children, onClick, color }) => (
  <button
    className={`button button_${color}`}
    {...{ type, children, onClick }}
  />
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['blue', 'red']),
};

Button.defaultProps = {
  type: 'button',
  children: 'New button',
  color: 'blue',
};

export default Button;
