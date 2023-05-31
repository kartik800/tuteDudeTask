import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FullLayout from "./layouts/FullLayout";
import FriendsCard from "./layouts/FriendsCard";

const Home = () => (
  <h1>
    <FullLayout />
  </h1>
);
const FriendCard = () => (
  <h1>
    <FriendsCard />
  </h1>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/uiux/referEarn/friendRefer" component={FriendCard} />
      </Switch>
    </Router>
  );
};

export default App;
