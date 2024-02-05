"use client";

import "src/app/globals.css";
import Head from 'next/head';
import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import NewsSection from './components/NewsSection';
import UpcomingEventsSection from './components/UpcomingEventsSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sample Code</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
      </Head>
      <Header />
      <CarouselSection />
      <NewsSection />
      <UpcomingEventsSection />
      <Footer />
    </div>
  );
}

export default App;
