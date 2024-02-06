// "use client";
// import React from 'react';
// import CarouselSection from './components/CarouselSection';
// import NewsSection from './components/NewsSection';
// import UpcomingEventsSection from './components/UpcomingEventsSection';
// // import "/src/app/globals.css"

// export default function App() {
//   return (
//     <div className="App">
//       <CarouselSection />
//       <NewsSection />
//       <UpcomingEventsSection />
//     </div>
//   );

// }

"use client";
import React from 'react';
import CarouselSection from './components/CarouselSection';
import NewsSection from './components/NewsSection';
import UpcomingEventsSection from './components/UpcomingEventsSection';
import "./styles.css"

//maybe add like a search by code or smth?
function App() {
  return (
    <div className="App">
      <main>
        <CarouselSection />
        <NewsSection />
        <UpcomingEventsSection />
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>   
    </div>
  );
}

export default App;
