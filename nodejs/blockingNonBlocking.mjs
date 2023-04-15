import fs, { readFileSync } from "fs";

async function readDatafromFile() {
  const response = await fs.promises.readFile("hello.txt");
  const result = response.toString();
  return result;
}

const getData = readDatafromFile()

console.log("Do this")
console.log("Do this too...")
console.log(await getData)


// const getData = readFileSync('hello.txt')

// console.log(getData.toString())

