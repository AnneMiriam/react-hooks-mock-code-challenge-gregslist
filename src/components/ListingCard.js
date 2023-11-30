import React, { useState } from "react";

function ListingCard({listing, removeListing}) {
  const {description, image, location, id} = listing
  const [isFav, setIsFav] = useState(false)

  function handleFav() {
    setIsFav(!isFav)
  }

  function deleteListing() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(() => removeListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick={handleFav} >
        {isFav ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteListing} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
