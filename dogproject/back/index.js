import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

const corsOption = { origin: "http://localhost:5174" };
app.use(cors(corsOption));
app.use(express.json());

app.get("/api/dog/random", (req, res) => {
  axios.get("https://dog.ceo/api/breeds/image/random")
  .then((result) => res.status(200).json(result.data.message))
})

app.get("/api/breed-list", (req, res) =>{
  axios.get("https://dog.ceo/api/breeds/list/all")
  .then((result) => res.status(200).json(result.data.message))
})

app.post("/api/breed-dog-image", (req, res) => {
  const userSelectedBreed = req.body.breed
  axios.get("https://dog.ceo/api/breed/" + userSelectedBreed + "/images/random")
  .then(result => res.status(200).json(result.data.message))
})

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
