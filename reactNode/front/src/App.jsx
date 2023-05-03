import { useState } from "react";
import "./App.css";
import axios from "axios";
import NavigationBar from "./Navbar"

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/addPosts", {
        title,
        author,
        content,
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <NavigationBar />
      <form onSubmit={handleSubmit} className="add-post">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Create Post</button>
      </form>
    </>
  );
}

export default App;
