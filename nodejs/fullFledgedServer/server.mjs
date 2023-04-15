import http from 'http'

let users = [
  { id: 1, name: "Dev Anand" },
  { id: 2, name: "Raj Kapoor" },
  { id: 3, name: "Rajesh Khanna" }
];

const server = http.createServer((req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  } 
  
  else if (req.url === '/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(201, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(users));
    });
  } 
  
  else if (req.url.match(/\/users\/\d+/) && req.method === 'PUT') {
    let id = parseInt(req.url.split('/')[2]);
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let updatedUser = JSON.parse(body);
      users.forEach((user, index) => {
        if (user.id === id) {
          users[index] = updatedUser;
        }
      });
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(users));
    });
  } 
  
  else if (req.url.match(/\/users\/\d+/) && req.method === 'DELETE') {
    let id = parseInt(req.url.split('/')[2]);
    users = users.filter(user => user.id !== id);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: `User with id ${id} deleted`}));
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: "Route not found"}));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
