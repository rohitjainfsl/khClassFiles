import {createReadStream, createWriteStream, read} from "fs"
import { Transform } from "stream"

let str = createReadStream('hello.txt')

str.on('data', (data) => {
    console.log(data.toString())
})


let writeStr = createWriteStream('hello2.txt');
writeStr.write("Ram\n")
writeStr.write("Shyam\n")
writeStr.write("Seeta\n")
writeStr.write("Geeta\n")


//Default value: 64KB

// const readStream = createReadStream("hello.txt", {start: 10, end: 50, encoding: 'utf8'})
// const writeStream = createWriteStream("hello2.txt", {highWaterMark: 1024 * 1024, flags: 'w'})

// readStream.on('data', (data) => {
//     console.log(data);
//   });
  

// readStream.pipe(writeStream)

// Transform

// const readStream = createReadStream("hello.txt")
// const writeStream = createWriteStream("hello2.txt")

// const transform = new Transform({
//     transform(chunk, encoding, callback){
//         callback(null, chunk.toString().toUpperCase())
//     }
// })


// readStream.pipe(transform).pipe(writeStream)


const readStream = createReadStream('data.csv')
const writeStream = createWriteStream("properData.csv")

const transform = new Transform({
    transform(chunk, encoding, callback){
        let noSpace = chunk.toString().replace(/ /g, '')
        let lowerCase = noSpace.toLowerCase()
        callback(null, lowerCase)
    }
})

readStream.pipe(transform).pipe(writeStream)




// REPL: Read Evaluate Print Loop