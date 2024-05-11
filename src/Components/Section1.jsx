import React from 'react';
import bg1 from '../assets/img/bg1.png';

const Section1 = () => {
  return (
    <div
      className="w-full  max-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <div className="flex justify-center pt-16 pb-40 h-full  ">
          <div className="text-white text-center">
            <h4 className="mb-2 font-medium">Food app</h4>
            <div className="pt-2 w-8/12 mx-auto  px-4">
              <h1 className="text-5xl font-bold  leading-snug 
              max-sm:text-base max-md:text-3xl">
                Why stay hungry when you can order form Bella Onojie
              </h1>
            </div>
            <div className="py-4">
              <p className="text-md  font-normal  tracking-widest max-sm:text-base">
                Download the bella onoje’s food app now on
              </p>
            </div>
            <div className="flex justify-center space-x-10 max-sm:flex-col justify-center items-center
            max-sm:space-x-0">
              <button
                className="bg-orange-600 tracking-widest  font-medium text-white 
                px-12 py-4 mt-4 hover:bg-red-600
               rounded-2xl "
              >
                PlayStore
              </button>
              <button
                className=" bg-transparent  tracking-widest font-medium text-white 
                px-10 py-3 mt-4 border-white border
               hover:bg-orange-600 rounded-2xl text-nowrap"
              >
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
