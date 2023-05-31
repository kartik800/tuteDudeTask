import React from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { HiTag } from "react-icons/hi";
import { CiDiscount1 } from "react-icons/ci";

const Work = () => {
  return (
    <div>
      <div className="font-semibold ml-4 md:ml-[187px] mt-4 md:mt-[79px] not-italic text-2xl text-purple-900">
        How does it work?
      </div>
      <div className="flex flex-wrap justify-center md:justify-start">
        <div className="ml-4 md:ml-[187px] mt-4 md:mt-[19px] grid grid-rows-2 grid-flow-col">
          <div className="row-span-2">
            <AiOutlineUsergroupDelete className="bg-gradient-to-r from-orange-500 to-purple-800 h-12 w-12 rounded-full" />
          </div>
          <div className="row-span-1 font-semibold ml-8">
            Invite your Friends
          </div>
          <div className="row-span-1 ml-8">
            Share the Link tutedude.com with your friend
          </div>
        </div>

        <div className="ml-4 md:ml-[187px] mt-4 md:mt-[19px] grid grid-rows-2 grid-flow-col">
          <div className="row-span-2">
            <LuWallet className="bg-gradient-to-r from-orange-500 to-purple-800 h-12 w-12 rounded-full" />
          </div>
          <div className="row-span-1 font-semibold ml-8">
            Friend Purchase any course
          </div>
          <div className="row-span-1 ml-8">
            Using Your REFERRAL CODE in the payment page
          </div>
        </div>
        <div className="ml-4 md:ml-[187px] mt-4 md:mt-[19px] grid grid-rows-2 grid-flow-col">
          <div className="row-span-2">
            <FaRupeeSign className="bg-gradient-to-r from-orange-500 to-purple-800 h-12 w-12 rounded-full" />
          </div>
          <div className="row-span-1 font-semibold ml-8">
            You get ₹200 as referral money
          </div>
          <div className="row-span-1 ml-8">
            On the total purchase the friend makes, into your wallet
          </div>
        </div>
        <div className="ml-4 md:ml-[187px] mt-4 md:mt-[19px] grid grid-rows-2 grid-flow-col">
          <div className="row-span-2">
            <CiDiscount1 className="bg-gradient-to-r from-orange-500 to-purple-800 h-12 w-12 rounded-full" />
          </div>
          <div className="row-span-1 font-semibold ml-8">
            Your Friend gets ₹200 off
          </div>
          <div className="row-span-1 ml-8">
            On their overall fee on successful purchase using your referral code
          </div>
        </div>
        <div className="ml-4 md:ml-[187px] mt-4 md:mt-[19px] grid grid-rows-2 grid-flow-col">
          <div className="row-span-2">
            <HiTag className="bg-gradient-to-r from-orange-500 to-purple-800 h-12 w-12 rounded-full" />
          </div>
          <div className="row-span-1 font-semibold ml-8">
            Invite your Friends
          </div>
          <div className="row-span-1 ml-8">
            Share the Link tutedude.com with your friend
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
