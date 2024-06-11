import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import movie1 from '../assets/Images/movie1.avif';
import movie2 from '../assets/Images/movie2.jpg';
import movie3 from '../assets/Images/movie3.avif';
import movie4 from '../assets/Images/movie4.avif';

const images = [movie1, movie2, movie3, movie4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('Welcome to Sneak Movie Room For you and your family');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change this value to adjust the speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set different text and text colors based on the index
    switch (currentIndex) {
      case 0:
        setText('We are located along Kahawa Barracks Road<br>A movie theater place for all of you. Just grab<br>your seat and enjoy with Popcorns and a<br>sip of cold Coke.');
        setTextColor('text-yellow-500');
        break;
      case 1:
        setText('Find movie at a cheaper price');
        setTextColor('text-red-500');
        break;
      case 2:
        setText('Prices from 50/= per movie for adults and 25/= for kids');
        setTextColor('text-green-500');
        break;
      default:
        setText('Welcome to Sneak Movie Room');
        setTextColor('text-white');
        break;
    }
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
      <div className={`absolute inset-0 flex items-center justify-center bg-opacity-50`}>
        <h1
          className={`text-4xl lg:text-6xl font-bold text-center px-6 lg:px-0 ${textColor}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
}

export default Home;
