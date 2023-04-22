import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let data = [
  { id: 1, name: "Vikas" },
  { id: 2, name: "Burhan" },
  { id: 3, name: "Sween" },
  { id: 4, name: "Komal" },
  { id: 5, name: "Jyoti" },
];

app.get("/users", (request, response) => {
  response.status(200).json(data);
});

app.post("/users", (request, response) => {
  const newData = request.body;
  data.push(newData);
  response.status(200).json(data);
});

app.put("/users/:id(\\d+)", (request, response) => {
//   const regex = /\/users\/\d+/;

//   if (!request.url.match(regex)) {
//     response.status(404).json({ message: "Invalid URL" });
//   } else {
    const id = Number(request.params.id);
    const updatedUser = request.body;
    data.forEach((user) => {
      if (user.id === id) {
        data[id - 1] = updatedUser;
      }
    });
    response.status(200).json(data);
//   }
});

app.delete("/users/:id", (request, response) => {
  const id = Number(request.params.id);
  data = data.filter((user) => user.id !== id);
  response.status(200).json(data);
});

app.all("/secret", (request, response) => {
  response.status(200).json("Congrats!! You have unlocked the secret level");
});

app.listen(3000, () => console.log("Server started at port 3000"));
