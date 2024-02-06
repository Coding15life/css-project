"use client";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

// Use "className" consistently, and fix the typo in the last button className
function CarouselSection() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container-fluid bg-dark text-white border py-3 my-3">
          <div className="carousel-item active">
            <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/1704050871/c83e8237-d720-4772-b27d-38493284a16b/839b0444-887c-4f32-9e7d-28dd4d097606/1280x720/match/image.jpg" className="d-block w-100" alt="Sports Img3" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h1>Ballin</h1>
              <p>-Ballers</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperfx.com/view_image/cristiano-ronaldo-real-madrid-1920x1080-wallpaper-15753.jpg" className="d-block w-100" alt="Sports Img2" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h1>Ronaldo</h1>
              <p>CHRISTIANO RONALD SUIIIIIIII</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/718952/pexels-photo-718952.jpeg?cs=srgb&dl=pexels-joe-calomeni-718952.jpg&fm=jpg" className="d-block w-100" alt="Sports Img 3" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h1>HAND FOOTBALL</h1>
              <p>Don't let your dreams be dreams -Sun Tzu</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
    </div>
  );
}

export default CarouselSection;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from "react";
// import Image from "next/image"; 
// import Carousel from 'react-bootstrap/Carousel';

// function CarouselSection() {
//   const [index, setIndex] = useState(0);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchRandomImages = async () => {
//       try {
//         const response1 = await fetch("https://source.unsplash.com/random/300x285?sig=1");
//         const image1 = response1.url;
//         const response2 = await fetch("https://source.unsplash.com/random/300x285?sig=2");
//         const image2 = response2.url;
//         const response3 = await fetch("https://source.unsplash.com/random/300x285?sig=3");
//         const image3 = response3.url;
//         setImages([image1, image2, image3]);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     fetchRandomImages();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 15000); // Change slide every 15 seconds

//     return () => clearInterval(interval);
//   }, [images]);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       {images.map((image, idx) => (
//         <Carousel.Item key={idx}>
//           <Image src={image} width={300} height={285} alt = 'baan' />
//           <Carousel.Caption>
//             <h3 className="carousel-caption">Caption {idx + 1}</h3>
//             <p className="carousel-description">Description {idx + 1}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default CarouselSection;
