import axios from "axios";
import React, { useEffect, useState } from "react";

function Breed() {
  const [breedList, setBreedList] = useState([]);
  const [image, setImage] = useState("");

  function handleBreedList() {
    axios.get("http://localhost:8000/api/breed-list").then((result) => {
      let array = [];
      for (const el in result.data) {
        if (result.data[el].length > 0) {
          for (const data of result.data[el]) {
            array.push(data + "-" + el);
          }
        } else {
          array.push(el);
        }
      }

      setBreedList(array);
    });
  }

  useEffect(() => {
    handleBreedList();
  }, []);

  function handleChange(e) {
    axios
      .post("http://localhost:8000/api/breed-dog-image", {
        breed: e.target.value,
      })
      .then((result) => {
        setImage(result.data.message);
      });
  }

  return (
    <div>
      <h2>Select A Breed</h2>
      <select onChange={handleChange}>
        {breedList?.map((breed) => {
          return (
            <option key={breed} value={breed.split("-")[1]}>
              {breed.split("-").join(" ")}
            </option>
          );
        })}
      </select>

      <br />
      {image ? (
        <img
          src={image}
          alt="image"
          width={500}
          style={{ marginTop: "20px" }}
        />
      ) : (
        <p>No Image</p>
      )}
    </div>
  );
}

export default Breed;
