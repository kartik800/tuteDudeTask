import Card from "./ui/Card";
import FriendWhoEnroll from "./ui/FriendWhoEnroll";
import Navbar from "../components/Navbar";
import TermsAndCondition from "../components/TermsAndCondition";
import Work from "./ui/HowDoesItWork";
const FullLayout = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Work />
      <FriendWhoEnroll />
      <TermsAndCondition />
    </div>
  );
};

export default FullLayout;
