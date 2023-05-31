import React from "react";
import { data } from "../../data/dummyData";

const FriendWhoEnroll = () => {
  return (
    <div className="ml-4 md:ml-[187px] mt-4 md:mt-[60px]">
      <div className="font-semibold not-italic text-2xl text-purple-900">
        <a href="/uiux/referEarn/friendRefer" className="block">
          Friends Who enrolled ({data.length})
        </a>
      </div>
    </div>
  );
};

export default FriendWhoEnroll;
