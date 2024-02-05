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
              <h1>Second slide</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img3" className="d-block w-100" alt="Sports Img 3" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h1>Third slide</h1>
              <p>Some representative placeholder content for the third slide.</p>
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
/*
import React, { useState, useEffect } from "react";
import Image from "next/image"; 
import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";
import Carousel from 'react-bootstrap/Carousel';

function CarouselSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3); // Hardcoded to 3 images
    }, 15000); // Change slide every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src={"/image.jpg"} width={300} height={285}/>
        <Carousel.Caption>
          <h3 className="carousel-caption">Caption 1</h3>
          <p className="carousel-description">Description 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={"/image.jpg"} width={300} height={285}/>
        <Carousel.Caption>
          <h3 className="carousel-caption">Caption 2</h3>
          <p className="carousel-description">Description 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={"/image.jpg"} width={300} height={285}/>
        <Carousel.Caption>
          <h3 className="carousel-caption">Caption 3</h3>
          <p className="carousel-description">Description 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
*/
