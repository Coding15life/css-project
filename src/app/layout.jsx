import React from 'react';
import Navbar from './ui/navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
