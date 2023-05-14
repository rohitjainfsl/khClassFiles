import express from "express";
import cors from "cors";
import connection from "./db/index.js";
import AdminRouter from './routes/admin.js'
import UserRouter from './routes/user.js'

const app = express();

//ALLOW INCOMING REQUESTS FROM THIS ORIGIN AS WELL
app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.urlencoded())
app.use(express.json());

//SSR: Server Side Rendered with Pug
app.set("view engine", "pug");


app.use("/admin", AdminRouter)
app.use("/user", UserRouter)



const port = process.env.PORT || 8001;

connection
  .then(() =>
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    })
  )
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas", err);
  });
