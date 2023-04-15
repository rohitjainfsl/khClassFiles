import readline from "readline"

const r1 = readline.createInterface(process.stdin, process.stdout)

r1.question("How is your mood today?", (mood) => {
    if(mood === "happy"){
        r1.write("That's good to know")
    }
    else if(mood === "excellent"){
        r1.write("That's great")
    }
    else{
        r1.write("Cheer up!! This too shall pass");
    }
    r1.close()
})

// ASSIGNMENT:
// pause(), resume(), prompt(), clearLine(), clearScreenDown()
