import React from "react";
import Filter from "./Filter";
import SearchField from "./SearchField";

const SearchSection = () => {
  return (
    <div className="fullWidth searchSectionContainer">
      <SearchField />
      <div className="filters">
        <Filter title="Italiano" isActive />
        <Filter title="Inglese" />
        <Filter title="Ordine crescente" />
        <Filter title="Ordine decrescente" />
        <Filter title="Ordine alfabetico" />
      </div>
    </div>
  );
};

export default SearchSection;
