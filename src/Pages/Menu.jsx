import React from 'react';
import Image4 from '../assets/Images/image4.webp';
import Image5 from '../assets/Images/image5.jpg';

const Menu = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="relative mb-4">
        <img src={Image5} alt="Menu Item 1" className="w-full h-auto rounded-lg shadow-md object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
          <p>Menu Item 1</p>
        </div>
      </div>
      <div className="relative">
        <img src={Image4} alt="Menu Item 2" className="w-full h-auto rounded-lg shadow-md object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
          <p>Menu Item 2</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
