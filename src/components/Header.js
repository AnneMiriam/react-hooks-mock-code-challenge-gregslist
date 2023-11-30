import React from "react";
import Search from "./Search";
import ListingForm from "./ListingForm";

function Header({setFilter, listings, setListings}) {

  function addListing(newListing) {
    setListings([...listings, newListing])
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleChange={setFilter} listings={listings} />
      <br />
      <ListingForm handleNewListing={addListing} />
    </header>
  );
}

export default Header;
