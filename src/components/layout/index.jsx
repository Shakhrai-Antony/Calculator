import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
