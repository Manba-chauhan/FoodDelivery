import React from 'react';

const Card = (props) => {
  return (
    <div className=" ">
      <div className="">
        <div className="max-md:text-center">
          <h6 className="text-md font-bold  text-orange-600 max-sm:w-full">
            {props.heading}
          </h6>
          <h1
            className="text-3xl font-bold  mt-2 w-8/12  max-sm:w-full max-md:w-full
           max-lg:w-full"
          >
            {props.subheading}
          </h1>
          <p
            className="text-sm font-meduim tracking-wider text-gray-600 mt-2 w-5/12
           max-sm:w-full  max-sm:mx-auto max-md:w-full max-lg:w-8/12 "
          >
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
