import React from 'react';
// import Section3 from './Section3';
import Card from './Card';
import Image from '../Helper/Image';
import phone3 from '../assets/img/phone3.png'

const Section4 = () => {
  return (
    <div className="  max-w-full flex flex-col  justify-center items-center   ">
    
      <div
        className="flex flex-col max-sm:flex-col  max-sm:justify-center
        max-sm:items-center mx-auto "
      >
        <div
          className="flex flex-col   justify-between 
        max-sm:flex-col  max-sm:justify-center max-sm:items-center "
        >
          <div className=" flex justify-center items-center max-md:flex-col max-sm:flex-col-reverse">
            <div className="">
              <Card
                heading="Explore varieties"
                subheading="Shop for your favorites
    meal as e dey hot."
                text="Shop for your favorite meals or drinks
    and enjoy while doing it."
              />
            </div>
            <div className=" flex-1 ">
            <Image src={phone3} alt="phone1" className="w-full h-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Section4;
