import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image3 from '../assets/Images/image3.jpg';
import Image7 from '../assets/Images/image7.avif';
import Image12 from '../assets/Images/image12.png';
import Image6 from '../assets/Images/image6.jpg';
import Image8 from '../assets/Images/image8.jpg';

const images = [Image3, Image7, Image12, Image6, Image8];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('Welcome to Sneakers');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      // Set different text and text colors based on the index
      switch (currentIndex) {
        case 0:
          setText('We are located along Kahawa Barracks');
          setTextColor('text-red-500');
          break;
        case 1:
          setText('Find your size at a cheaper price');
          setTextColor('text-yellow-500');
          break;
        case 2:
          setText('Prices from 1500/=');
          setTextColor('text-blue-500');
          break;
        default:
          setText('Welcome to Sneakers');
          setTextColor('text-white');
          break;
      }
    }, 3000); // Change this value to adjust the speed
    return () => clearInterval(interval);
  }, [currentIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change this value to adjust the speed
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <div className="relative h-screen">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-screen">
            <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
      <div className={`absolute inset-0 flex items-center justify-center bg-opacity-50 ${textColor}`}>
        <h1 className="text-4xl lg:text-6xl font-bold text-center px-6 lg:px-0">{text}</h1>
      </div>
    </div>
  );
}

export default Home;
