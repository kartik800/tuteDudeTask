import Navbar from "../components/Navbar";
import Card2 from "./ui/Card2";
import FriendsWhoEnrolled from "./ui/FriendsWhoEnrolled";
import TermsAndCondition from "../components/TermsAndCondition";

const FriendsCard = () => {
  return (
    <div>
      <Navbar />
      <Card2 />
      <FriendsWhoEnrolled />
      <TermsAndCondition />
    </div>
  );
};

export default FriendsCard;
