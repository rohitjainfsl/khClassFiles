import express from "express";
import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import session from "express-session";

const router = express.Router();

router.use(
  session({
    secret: "abcdef1234567890",
    resave: false,
    saveUninitialized: true,
  })
);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  const { name, email, username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = new Admin({
    name: name,
    email: email,
    username: username,
    password: hashedPassword,
  });

  await admin.save();
  res.redirect("/admin/login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // Find the admin by username
  const admin = await Admin.findOne({ username });
  if (admin) {
    // Compare the password
    const match = await bcrypt.compare(password, admin.password);
    if (match) {
      // Store the username in session
      req.session.username = username;
      res.redirect("/admin/dashboard");
    } else {
      res.render("login", { error: "Invalid credentials" });
    }
  } else {
    res.render("login", { error: "Invalid credentials" });
  }
});

router.get("/logout", (req, res) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/admin/login");
  });
});

router.get("/dashboard", (req, res) => {
  // Check if the admin is logged in
  if (req.session.username) {
    res.render('dashboard');
  } else {
    res.redirect('/admin/login');
  }
});

export default router;
