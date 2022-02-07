import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, addLike}) {

  const displayToys = toys.map(toy => {
    return (
      <ToyCard key={toy.id} {...toy} deleteToy={deleteToy} addLike={addLike}/>
    )
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
