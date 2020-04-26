import React from "react";

import search from "../img/search.svg";

const SearchForm = () => (
  <form className="search-form">
    <img className="search-icon" src={search} alt="" />
    <div>
      <input type="text" />
    </div>
  </form>
);

export default SearchForm;
