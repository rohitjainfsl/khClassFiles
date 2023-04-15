import fs from "fs";

async function recursiveListing(rootDir = "./") {
  const files = await fs.promises.readdir(rootDir);

  for (let file of files) {
    const path = rootDir + "/" + file;
    const stats = await fs.promises.lstat(path);

    if (stats.isDirectory()) {
      recursiveListing(path);
    } else {
      console.log(path);
    }
  }
}
// const rootDir = process.argv[2]
recursiveListing();

// lstat(path, [options], callback)

// fs.lstat(path, (err, stats) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         console.log("File or directory does not exist");
//       } else {
//         console.error(err);
//       }
//     } else {
//       console.log("File or directory exists");
//     }
// });

// fs.lstat(path, (err, stats) => {
//   if (err) {
//     console.error(err);
//   } else {
//     if (stats.isFile()) {
//       console.log("File is a file");
//     } else {
//       console.log("File is not a file");
//     }
//   }
// });

// fs.lstat(path, (err, stats) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`File size is ${stats.size} bytes`);
//   }
// });

// fs.lstat(path, (err, stats) => {
//   if (err) {
//     console.error(err);
//   } else {
//     if (stats.isSymbolicLink()) {
//       console.log("File is a symbolic link");
//     } else {
//       console.log("File is not a symbolic link");
//     }
//   }
// });
