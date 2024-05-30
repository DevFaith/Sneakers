import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className='w-full relative h-16 bg-red-400 border-b border-red-200 px-5 flex justify-between items-center'>

        <div className='flex justify-start gap-20 items-center'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl text-white underline underline-offset-4'>Sneakers</h1>
        </div>
        <div className='flex justify-center items-center'>

          <ul className='gap-8 text-white text-2xl hidden lg:flex'>
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

          <div className="lg:hidden cursor-pointer" onClick={() => setDropdown(!dropdown)}>
            <FaBars size={25} />
          </div>

          {dropdown && (
            <div className="absolute w-full h-screen top-0 left-0 bg-white z-20">
              <div className="relative">
                <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                  <IoMdClose size={25} />
                </div>
              </div>

              <ul className="mt-20 flex items-center flex-col gap-10">
                <li onClick={() => setDropdown(!dropdown)}>
                  <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Home</Link>
                </li>
                <li onClick={() => setDropdown(!dropdown)}>
                  <Link to='/menu' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Menu</Link>
                </li>
                <li onClick={() => setDropdown(!dropdown)}>
                  <Link to='/about' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">About</Link>
                </li>
                <li onClick={() => setDropdown(!dropdown)}>
                  <Link to='/contacts' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Contacts</Link>
                </li>
              </ul>

            </div>
          )}

        </div>
      </div>

    </>
  )
}

export default Header