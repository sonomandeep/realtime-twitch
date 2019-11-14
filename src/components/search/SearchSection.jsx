import React from "react";
import Filter from "./Filter";
import SearchField from "./SearchField";
import BackButton from "./BackButton";

const SearchSection = () => {
  return (
    <div className="fullWidth searchSectionContainer">
      <div className="search-field-container flex row center">
        {/* <BackButton /> */}
        <SearchField />
      </div>
      <div className="filters">
        <Filter title="Italiano" filter="language=it" />
        <Filter title="Inglese" filter="language=en" />
      </div>
    </div>
  );
};

export default SearchSection;
