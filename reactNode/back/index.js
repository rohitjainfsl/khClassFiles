import express from "express";
import bodyParser from "body-parser";
import connection from "./db/index.js";
import path from "path";
import Post from "./models/post.js";

// A build is minified and optimized version of your code

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join("../front", "dist")));

// Serve the React application
app.get("/", (req, res) => {
  // res.send({"message": "Hello There"})

  const indexPath = path.resolve("../front", "dist", "index.html");
  res.sendFile(indexPath);
});

app.get("/basic", (req, res) => {
  // res.send({"message": "Hello There"})

  const indexPath = path.resolve("../front", "dist", "index.html");
  res.sendFile(indexPath);
});

app.post("/api/addPosts", async (req, res) => {
  const { title, author, content } = req.body;
  const post = new Post({ title, author, content });
  await post.save();
  res.status(200).json(post);
});

app.get("/api/showPosts", async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});
app.get("/api/searchPosts", async (req, res) => {
  try {
    const searchTerm = req.query.q; // Get the search query from the request query parameters
    const posts = await Post.find({
      title: { $regex: searchTerm, $options: "i" },
    }); // Find all posts with the search term in the title field using regex
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

connection
  .then(() =>
    app.listen(3000, () => console.log("Server has started on port 3000"))
  )
  .catch((error) => console.log("MongoDB Atlas Error " + error));
