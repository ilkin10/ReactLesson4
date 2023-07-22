import React, { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    name: "Tom Hardy",
    artwork: {
      title: "Revenant",
      city: "California",
      image:
        "https://media.gq.com/photos/560abc24dfc9eee35e9ebca8/1:1/w_1048,h_1048,c_limit/revenant-trailer-tom-hardy-05.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  return (
    <div>
      <section>
        <label>
          Name : <input value={person.name} onChange={handleNameChange}></input>
        </label>
        <p>
            <i>{person.artwork.title}</i>
            {' by '}
            {person.name}
            <br></br>
            (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title}></img>
      </section>
    </div>
  );
}
