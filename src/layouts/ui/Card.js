import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch">
      <div className="bg-white shadow-md rounded-lg p-6 md:w-[486px] md:h-[188px] mx-auto md:ml-[187px] md:mt-[79px] mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-sm font-semibold text-purple-900">
              Referral Earning
            </h2>
            <p className="text-black text-3xl font-semibold">₹2500</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-sm font-semibold text-purple-900">
              Total Referrals
            </h2>
            <p className="text-black text-3xl font-semibold">7</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-purple-900">
              Wallet Balance
            </h2>
            <p className="text-black text-3xl font-semibold">₹500</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-purple-900 text-white px-8 md:px-20 py-2 rounded-full text-sm">
            Withdraw Balance
          </button>
        </div>
      </div>
      <div className="p-6 md:w-[486px] md:h-[188px] mx-auto md:ml-[93px] md:mt-[79px] mb-4 md:mb-0 font-semibold not-italic text-2xl text-purple-900">
        Your referral Code
        <div className="p-4 rounded-md shadow border-2 border-pink-500 mt-2">
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
    </div>
  );
};

export default Card;
