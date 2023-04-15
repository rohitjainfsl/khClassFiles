import fs from "fs";

// function readDataFromFile() {
//   fs.promises.readFile('hello.txt')
//     .then((response) => {
//       const result = response.toString();
//       console.log(result);
//     })
// }

async function readDataFromFile(){
  const response = await fs.promises.readFile('hello.txt');
  const result = response.toString()
  console.log(result)
}
console.log("This will print out first")


readDataFromFile();
