import React from 'react';
import Image from '../Helper/Image';
import logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <div className="max-w-full max-h-full">
      <div className="">
        <div className="flex justify-around items-center max-sm:flex-col  max-sm:space-y-5">
          <div className="">
            <Image src={logo} alt="logo" className="" />
          </div>
          <div className="flex space-x-4">
            <span className="text-orange-500 font-bold text-2xl">
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span className="text-orange-500 font-bold text-2xl">
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span className="text-orange-500 font-bold text-2xl">
              <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
          <div className="">
            <p>Copywright 2020 Bella Onojie.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
