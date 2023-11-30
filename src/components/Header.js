import React from "react";
import Search from "./Search";

function Header({setFilter, listings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleChange={setFilter} listings={listings} />
    </header>
  );
}

export default Header;
