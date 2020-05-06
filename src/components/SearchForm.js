import React from "react";
import { useHistory } from "react-router-dom";

import search from "../img/search.svg";

const SearchForm = () => {
  let searchInput;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push( `/search/${searchInput.value}` );
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <img className="search-icon" src={search} alt="" />
      <div>
        <input type="text" ref={(input) => (searchInput = input)} />
      </div>
    </form>
  );
};

export default SearchForm;
