import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let users = [
  { id: 1, name: "Dev Anand" },
  { id: 2, name: "Raj Kapoor" },
  { id: 3, name: "Rajesh Khanna" },
];

app.get('/users', (request, response) => {
    response.json(users)
})

app.post('/users', (request, response) => {
    const newUser = request.body
    users.push(newUser)
    response.status(200).json(users)
})

app.delete('/users/:id', (request, response) => {
    const id = Number(request.params.id)
    users = users.filter(user => user.id !== id)
    response.status(200).json(users)
})

app.listen(3002, () => {
    console.log('Server running at http://localhost:3002/');
})

// JWT
// queryString
// express