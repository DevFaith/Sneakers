import React from 'react';
import Image3 from '../assets/Images/image3.jpg';

const Home = () => {
  return (
    <div className="relative h-screen">
      <img src={Image3} alt="Description" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <h1 className="text-4xl lg:text-6xl font-bold text-white text-center px-6 lg:px-0">Welcome to Sneakers</h1>
      </div>
    </div>
  );
}

export default Home;
