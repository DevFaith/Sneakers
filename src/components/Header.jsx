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
                <h1 className='text-5xl text-white underline underline-offset-4'>Sneakers</h1>
            </div>
            <div className='flex justify-center items-center'>
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
        </div>

    </>
  )
}

export default Header