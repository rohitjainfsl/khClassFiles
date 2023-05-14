import express from "express";
import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import User from "../models/User.js";
import session from "express-session";
import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    name,
    email,
    username,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true }); //XSS
    res.status(200).send("Well Done");
    // res.redirect('/user/quiz');
  } catch (error) {
    console.log(error);
    res.redirect("/user/signup");
  }
});

router.get("/login", (req, res) => {});



// User quiz page
router.get('/quiz', (req, res) => {
    // Check if user is authenticated
    const token = req.cookies.token;
    if (!token) {
      res.redirect('/user/login');
      return;
    }
  
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.userId;
      if(userId)
      // Render the quiz page
        res.render('user/quiz');
    } catch (error) {
      console.log(error);
      res.redirect('/user/login');
    }
  });



export default router;
