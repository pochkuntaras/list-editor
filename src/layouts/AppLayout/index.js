import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => (
  <main>{children}</main>
);

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
