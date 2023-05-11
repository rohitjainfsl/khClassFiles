import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [randomDogPhoto, setRandomDogPhoto] = useState("");

  function handleClick() {
    axios
      .get("http://localhost:8000/api/dog/random")
      .then((result) => setRandomDogPhoto(result.data));
  }

  return (
    <>
      <button onClick={handleClick}>Get Random Dog Image</button>

      {randomDogPhoto ? (
        <img src={randomDogPhoto} alt="Random Dog Photo" width="500px" />
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
