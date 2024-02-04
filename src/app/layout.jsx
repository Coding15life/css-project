import React from 'react';
import Navbar from './ui/navbar'; // Make sure the import path is correct for your project structure

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        {/* Footer content goes here */}
        <p>© 2024 Sports</p>
      </footer>
    </>
  );
};

export default Layout;
