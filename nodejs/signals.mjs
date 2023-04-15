// SIGINT, SIGSTP, SIGCONT

import readline from "readline";

let r1 = readline.createInterface(process.stdin, process.stdout);

r1.on("SIGINT", () => {
  console.log("Exiting the program...");
  process.exit(1);
});

r1.on("SIGTSTP", () => {
  console.log("Received SIGTSTP signal.");
  process.pause();
}); //Ctrl + Z

//SIGCONT
