import React from "react";
import Filter from "./Filter";
import SearchField from "./SearchField";

const SearchSection = () => {
  return (
    <div className="fullWidth searchSectionContainer">
      <SearchField />
      <div className="filters">
        <Filter title="Italiano" filter="language=it" />
        <Filter title="Inglese" filter="language=en" />
      </div>
    </div>
  );
};

export default SearchSection;
