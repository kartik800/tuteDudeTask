import React from "react";

const FriendWhoEnrolledCard = ({ item }) => {
  return (
    <div className="flex items-stretch">
      <div className="bg-gradient-to-r from-orange-500 to-purple-800 shadow-md rounded-3xl py-6 px-6 w-[358px] h-[228px] ml-[70px] border-purple-950 mt-[40px] mb-[40px]">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-md font-semibold text-white">{item.name}</h2>
          </div>
          <div>
            <p className="text-sm text-white">{item.date}</p>
          </div>
        </div>
        <div className="text-md font-semibold text-white">
          Course Enrolled (4){" "}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
          <div className="rounded-xl shadow-md border-slate-300">
            <p className="text-sm text-white px-4 py-1">UI/UX</p>
          </div>
          <div className="rounded-xl shadow-md border-slate-300">
            <p className="text-sm text-white px-4 py-1">Portfolio</p>
          </div>
          <div className="rounded-xl shadow-md border-slate-300">
            <p className="text-sm text-white px-4 py-1">Illustrator</p>
          </div>
          <div className="rounded-xl shadow-md border-slate-300">
            <p className="text-sm text-white px-4 py-1">UI/UX</p>
          </div>
        </div>
        <div className="text-md font-semibold text-white mt-4 mb-4">
          Referral Amount ₹{item.amount}
        </div>
      </div>
    </div>
  );
};

export default FriendWhoEnrolledCard;
