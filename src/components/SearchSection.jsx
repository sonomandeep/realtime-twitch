import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Filter from "./Filter";

const SearchSection = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <div className="fullWidth searchSectionContainer">
      <form
        onSubmit={handleSubmit}
        className="fullWidth flex flex-center"
        id="searchForm"
      >
        <input
          id="searchField"
          type="text"
          name="cerca"
          placeholder="Cerca..."
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <FaSearch size="28px" color="#6441a5" id="searchIcon" />
      </form>
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
