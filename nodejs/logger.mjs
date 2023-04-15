import fs from "fs";


export function write(file, text) {
  fs.writeFile(file, text + "\n", (err) => {
    if (err) throw err;
  });
}

export function read(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    else console.log(data.toString());
  });
}

export function append(file, text) {
  fs.appendFile(file, text + "\n", (err, data) => {
    if (err) throw err;
    else console.log(data);
  });
}
