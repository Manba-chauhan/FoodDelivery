import React from 'react';
import logo  from '../assets/img/logo.png';

const Header = () => {
  return (
    <div className="bg-white w-full px-10 py-0  shadow-sm">
      <div className="flex justify-between items-center ">
        <div className="">
          <img src={logo} alt="logo" className="w-44" />
        </div>
        <div className="">
          <ul className="flex space-x-32 max-md:hidden">
            <li
              className="font-medium text-lg hover:text-red-500 cursor-pointer
             text-red-500"
            >
              Home
            </li>
            <li className="font-medium text-lg hover:text-red-500 cursor-pointer">
              Product
            </li>
            <li className="font-medium text-lg hover:text-red-500 cursor-pointer">
              Faq
            </li>
            <li className="font-medium text-lg hover:text-red-500 cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="md:hidden">
            <span>
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
