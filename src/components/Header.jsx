import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className='w-full relative h-16 bg-red-400 border-b border-red-200 px-5 flex justify-between items-center'>
        <div className='flex justify-start gap-20 items-center'>
          <h1 className='text-5xl text-white-400 '>Sneak Movie Room</h1>
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <ul className='flex gap-8 text-white text-2xl'>
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Home</Link>
            </li>
            <li>
              <Link to='/menu' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Menu</Link>
            </li>
            <li>
              <Link to='/about' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">About</Link>
            </li>
            <li>
              <Link to='/contacts' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden flex items-center'>
          {dropdown ? (
            <IoMdClose
              className='text-white text-3xl cursor-pointer'
              onClick={() => setDropdown(false)}
            />
          ) : (
            <FaBars
              className='text-white text-3xl cursor-pointer'
              onClick={() => setDropdown(true)}
            />
          )}
        </div>
      </div>
      {dropdown && (
        <div className='w-full bg-red-400 flex flex-col items-center md:hidden'>
          <ul className='flex flex-col gap-4 text-white text-2xl'>
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Home</Link>
            </li>
            <li>
              <Link to='/menu' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Menu</Link>
            </li>
            <li>
              <Link to='/about' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>About</Link>
            </li>
            <li>
              <Link to='/contacts' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Contacts</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
