import React, { useState } from "react";

function ToyCard({ id, name, image, likes, deleteToy, addLike }) {
  const [likeCount, setLikeCount] = useState(likes);
  function handleDelete(e) {
    deleteToy(e.target.id);
  }

  function handleLike(e) {
    setLikeCount((prev) => 1 + prev);
    addLike(e.target.id, likeCount);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likeCount} Likes </p>
      <button className="like-btn" onClick={handleLike} id={id}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete} id={id}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
