import React from 'react';
import Image from '../Helper/Image';
import Card from './Card';
import phone4 from '../assets/img/phone4.png'

const Section5 = () => {
  return (
    <div className="  max-w-full flex flex-col  justify-center items-center   ">
      <div
        className="flex flex-col justify-center items-center max-sm:flex-col  max-sm:justify-center
        max-sm:items-center "
      >
        <div className="flex flex-col justify-center items-center max-sm:flex-col  max-sm:justify-center max-sm:items-center ">
          <div className=" flex flex-1 justify-center items-center max-md:flex-col max-md:justify-center">
            <div className="pl-12">
              <Image src={phone4} alt="phone1" className="" />
            </div>
            <div className=" max-sm:w-10/12 max-sm:pb-5">
              <Card
                heading="Checkout"
                subheading="When you done check out
and get it delivered."
                text=" When you done check out and get it 
delivered with ease."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
