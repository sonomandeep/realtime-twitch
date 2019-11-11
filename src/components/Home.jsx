import React from "react";
import PropTypes from "prop-types";
import { SearchSection } from "./search";
import { GamesSection } from "./games";

const Home = () => {
  return (
    <>
      <SearchSection />
      <GamesSection />
    </>
  );
};

export default Home;
