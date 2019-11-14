import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { searchGameAction } from "../../store/actions/twitch";

function SearchField() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(searchGameAction(query));
  };

  return (
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
      <FaSearch size="18px" color="#6441a5" id="searchIcon" />
    </form>
  );
}

export default SearchField;
