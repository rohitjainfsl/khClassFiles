import net from "net";
import readline from "readline";

const readLine = readline.createInterface(process.stdin, process.stdout);

const getUsername = new Promise((resolve) => {
  readLine.question("Enter your Username: ", (username) => {
    resolve(username);
  });
});

getUsername.then((username) => {
  const client = net.createConnection({ port: 8080 }, () => {
    console.log("Connected to server");
  });

  readLine.on("line", (data) => {
    client.write(username + " : " + data);
  });

  client.on("data", (data) => {
    console.log(data.toString());
  });
  client.on('close', () => {
    console.log("The connection is terminated")
  })
});
