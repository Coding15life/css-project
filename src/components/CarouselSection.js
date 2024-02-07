import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselSection() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container-fluid py-3 my-3">
          <div className="carousel-item active">
            <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/1704050871/c83e8237-d720-4772-b27d-38493284a16b/839b0444-887c-4f32-9e7d-28dd4d097606/1280x720/match/image.jpg" className="d-block w-100" alt="Sports Img3" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
              <h1>Ballin</h1>
              <p>-Ballers</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbcd56e8bc003e00a/657421f8ae7c62040a02891f/GOAL_-_Blank_WEB_-_Facebook_-_2023-12-09T081423.143.jpg?auto=webp&format=pjpg&width=3840&quality=60" className="d-block w-100" alt="Sports Img2" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
              <h1>Ronaldo</h1>
              <p>CHRISTIANO RONALD SUIIIIIIII</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/718952/pexels-photo-718952.jpeg?cs=srgb&dl=pexels-joe-calomeni-718952.jpg&fm=jpg" className="d-block w-100" alt="Sports Img 3" style={{ width: '1920px', height: '660px' }} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
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
