import React from 'react';
import phone5 from '../assets/img/phone5.png';
import phone4 from '../assets/img/phone4.png';

const Section2 = () => {
  return (
    <div className="w-full  h-[600px] bg-white border-black  border-b-2 max-sm:h-full">
      <div className="flex justify-center items-center">
        <div className="">
          <div
            className="xl:translate-x-52 -translate-y-72
             max-lg:-translate-y-60  translate-x-32 
             max-sm:-translate-y-32  translate-x-12
          "
          >
            <img src={phone5} alt="phone6" className="" />
          </div>
        </div>
        <div className="">
          <div
            className="xl:-translate-x-32 -translate-y-44 rotate-6 max-lg:-translate-y-40  -translate-x-28 
             max-sm:-translate-y-20  max-sm:-translate-x-14 "
          >
            <img src={phone4} alt="phone6" className="" />
          </div>
        </div>
      <hr className='border-b-2 '></hr>
      </div>
    </div>
  );
}

export default Section2;
