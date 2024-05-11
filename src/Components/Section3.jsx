import React from 'react';
import Card from './Card';
import Image from '../Helper/Image';
import phone1 from '../assets/img/phone1.png'

const Section3 = () => {
  return (
    <div className=" w-full flex flex-col  justify-center items-center    ">
      <h1 className="text-5xl font-bold max-md:text-4xl max-sm:text-2xl mt-10">
        How the App Works
      </h1>
      <div
        className="flex flex-col justify-center items-center max-sm:flex-col  max-sm:justify-center
        max-sm:items-center"
      >
        <div
          className="flex flex-col item-center  justify-between 
        max-sm:flex-col  max-sm:justify-center max-sm:items-center "
        >
          <div className=" flex justify-center items-center max-md:flex-col  max-sm:mx-auto">
            <div className="pl-10">
              <Image src={phone1} alt="phone1" className="" />
            </div>
            <div className=" px-4  ">
              <Card
                heading="Create an account"
                subheading="Create/login to an existing
account to get started"
                text="An account is created with your email
and a desired password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
