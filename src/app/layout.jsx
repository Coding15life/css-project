import React from 'react';
import Navbar from './ui/navbar'; 
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <html>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </html>
  );
};

export default Layout;
