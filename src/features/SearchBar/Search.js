import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrFormSearch } from "react-icons/gr";

import {
  selectSearchTerm,
  setSearchTerm,
  
} from "../SearchBar/searchSlice";

import './search.css';

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleChangeSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleOnKeyDown = (e) => {
      if (e.keyCode === 13){
          document.getElementById('src-btn').click();
          dispatch(setSearchTerm(''));
          
      }
  }

  return (
    <div className='search-container'>
      <div className='search-element'>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChangeSearch}
          onKeyDown={handleOnKeyDown}
          value={searchTerm}
          
        />
      </div>
      <Link to={`/search/${searchTerm}`} id='src-btn'>
         <GrFormSearch className="search-btn" />
      </Link>
    </div>
  );
}

export default Search;
