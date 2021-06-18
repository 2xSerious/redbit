import React from "react";
import Search from "../SearchBar/Search";

export const Header = () => {
  return (
    <header>
      {/* <Link to='/'> */}
      <div className="header-title">
        <div onClick={() => (window.location.href = "/")}>
          <h1>
            Red<span>bit</span>
          </h1>
        </div>
        {/* </Link> */}
        <Search />
      </div>
    </header>
  );
};
