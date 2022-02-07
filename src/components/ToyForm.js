import React, { useState } from "react";

function ToyForm({addNewToy}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState(0)

  function handleNewName(e) {
    setName(e.target.value);
  }

  function handleNewImg(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newToyObj = {name, image, likes}
    addNewToy(newToyObj)
    
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={handleNewName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleNewImg}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
