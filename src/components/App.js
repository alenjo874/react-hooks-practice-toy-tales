import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [render, setRender] = useState(true);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [render]);

  function addNewToy(newToyObj) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToyObj),
    });
    setRender(!render);
  }

  function deleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });
    setRender(!render);
  }

  function addLike(id, newLikes) {
  
    console.log(newLikes);
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        likes: newLikes+1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setRender(!render);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} addLike={addLike} />
    </>
  );
}

export default App;
