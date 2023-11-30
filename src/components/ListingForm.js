import React, { useState } from "react";

function ListingForm({ handleNewListing }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newListing = { description, image, location };
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((r) => r.json())
      .then(handleNewListing);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>submit new listings</h2>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="sumbit"
        />
      </form>
    </div>
  );
}

export default ListingForm;
