import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = " http://localhost:6001/listings"

function App() {
  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch(API)
    .then(r=>r.json())
    .then(setListings)
  }, [])

  function removeListing(id) {
    setListings(listings.filter(listing => listing.id !== id))
  }

  return (
    <div className="app">
      <Header  setFilter={setFilter} listings={listings} />
      <ListingsContainer listings={listings.filter(listing => listing.description.toLowerCase().includes(filter.toLowerCase()))} removeListing={removeListing} />
    </div>
  );
}

export default App;
