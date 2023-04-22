//•	Improved performance
//•	Search engine optimization (SEO)
//•	Accessibility

// Templating Engine: Pug(Jade), Mustache, and EJS

import express from "express"
const app = express()
app.set("view engine", "pug")

app.get("/", (request, response) => {
    response.send("<h1>Welcome to Server Side Rendering</h1>")
})

app.get("/users/login", (request, response) => {
    response.render("partials/login", {
        pageTitle: 'Login Page',
        pageHeading: 'Login to your page',
        buttonText: 'Login'
    })
})

app.get("/users/dashboard", (request, response) => {
    response.render("partials/dashboard", {
        pageTitle: 'User Dashboard',
        pageHeading: 'Your Dashboard',
        userName: 'Rohit',
        buttonText: "Logout",
        posts: [
            {id: 1, author: 'Burhan', title: 'Typescript', content: 'Typescript checks types'},
            {id: 2, author: 'Vikas', title: 'SSR', content: 'Not Sushant Sing Rajput'},
            {id: 3, author: 'Pratya', title: 'React', content: 'React is cool'},
            {id: 4, author: 'Abhay', title: 'Next JS', content: 'React Framework for Full Stack'},
            {id: 5, author: 'Komal', title: 'Java', content: 'An evergreen Language'},
        ]
    })
})

app.get("/users/logout", (request, response) => {
    response.redirect("/users/login")
})

app.listen(8080, () => console.log("Server started at port 8080"))