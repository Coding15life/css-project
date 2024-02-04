import React from 'react';
import Layout from '../layout/layout'; // Adjust the path to wherever your Layout component is
import '../globals.css'; // Adjust the path to your global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
