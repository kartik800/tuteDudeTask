import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "../../data/dummyData";
import FriendWhoEnrolledCard from "./FriendWhoEnrolledCard";

const FriendsWhoEnrolled = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className="ml-4 md:ml-[187px] mt-4 md:mt-[60px]">
        <div className="font-semibold not-italic text-2xl text-purple-900">
          <button onClick={handleDropdownToggle}>
            Friends Who enrolled ({data.length})
          </button>
        </div>
        {isDropdownOpen && (
          <div className="relative flex items-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
            <div
              id="slider"
              className="w-full h-full overflow-x-scroll whitespace-nowrap flex items-stretch scrollbar-hide"
            >
              {data.map((item) => (
                <FriendWhoEnrolledCard item={item} key={item.id} />
              ))}
            </div>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsWhoEnrolled;
