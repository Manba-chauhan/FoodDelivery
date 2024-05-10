import React from 'react';
import bg2 from '../assets/img/bg2.png';

const Section6 = () => {
  return (
    <div
      className="w-full h-[520px]  "
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full object-cover  flex items-center justify-center">
        <div className="flex justify-center items-center  p-20  ">
          <div className="text-white text-center flex flex-col justify-center items-center">
            <div className="pt-2  mx-auto  px-4">
              <h1 className="text-5xl font-bold  leading-snug max-sm:text-[20px] max-sm:text-nowrap max-md:text-3xl">
                Download the app now.
              </h1>
            </div>
            <div className="py-4">
              <p className="text-md  font-normal  tracking-widest max-sm:text-base">
                Available on your favorite store. Start your premium experience
                now
              </p>
            </div>
            <div
              className="flex justify-center  space-x-10 max-sm:flex-col justify-center 
              items-center
            max-sm:space-x-0"
            >
              <button
                className="bg-orange-600 tracking-widest  font-medium text-white px-12 py-4 mt-4 hover:bg-red-600
               rounded-xl "
              >
                PlayStore
              </button>
              <button
                className=" bg-transparent  tracking-widest font-medium text-white px-12 py-4 mt-4 border-white border
               hover:bg-orange-600 rounded-xl text-nowrap"
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

export default Section6;
