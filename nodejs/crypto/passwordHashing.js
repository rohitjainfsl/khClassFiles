import express from "express";
import bodyParser from "body-parser";
import crypto, { verify } from "crypto";

const app = express();

app.use(bodyParser.json());

// in memory database
const users = [];

function hashedPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  const newHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return newHash === hash;
}

app.post("/users", (request, response) => {
  const { username, password } = request.body;
  const hashedP = hashedPassword(password);
  users.push({ username: username, salt: hashedP.salt, hash: hashedP.hash });
  response.status(200).json(users);
});

app.post("/login", (request, response) => {
  const { username, password } = request.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    response.status(401).json({ message: "Invalid username or password" });
  } else {
    if (verifyPassword(password, user.salt, user.hash)) {
      response.status(200).json({ message: "Login Successful" });
    } else {
      response.status(401).json({ message: "Invalid username or password" });
    }
  }
});

app.listen(3000, () => console.log("Server started at 3000"));
