import axios from "axios";
import React, { useEffect, useState } from "react";

function Breed() {
  const [userSelectedValue, setUserSelectedValue] = useState("");

  const [breedList, setBreedList] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/breed-list")
      .then((result) => {
        console.log(result.data)
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/random-dog-image", {
        breed: userSelectedValue,
      })
      .then((result) => {
        console.log(result);
      });
  }, [userSelectedValue]);

  function handleChange(e) {
    setUserSelectedValue(e.target.value);
  }

  return (
    <div>
      <h2>Select A Breed</h2>
      <select onChange={handleChange}>
        {
          
        }
      </select>
    </div>
  );
}

export default Breed;
