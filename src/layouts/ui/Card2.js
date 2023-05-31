import React from "react";

const Card2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-[486px] h-[188px] mx-auto sm:ml-[187px] sm:mt-[79px] md:ml-[187px] md:mt-[79px] mb-4 md:mb-0 font-semibold not-italic text-2xl text-purple-900">
        Your referral Code
        <div className="p-4 rounded-md shadow border-2 border-pink-500 mt-2 sm:w-[350px]">
          <div className="flex items-center justify-between ml-10 mr-10 mb-2">
            <p className="text-4xl font-bold">E</p>
            <p className="text-4xl font-bold">D</p>
            <p className="text-4xl font-bold">C</p>
            <p className="text-4xl font-bold">H</p>
            <p className="text-4xl font-bold">5</p>
            <p className="text-4xl font-bold">4</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-[186px] h-[108px] mx-auto md:ml-[187px] md:mt-[79px] md:mr-[187px] sm:ml-[187px]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-purple-900">
              Wallet Balance
            </h2>
            <p className="text-gray-500">500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
