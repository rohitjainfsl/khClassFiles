import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
  // response.setHeader("Content-type", "text/html")
  // console.log(url.parse(request.url))

  response.writeHead(200, {"Content-type": "application/json"})
  response.write("Connected to server\n")


  if(request.method === "POST"){
    let body = ''
    request.on('data', (data) => {
      body += data.toString()
      response.end(body)
    })
  }

  
})

server.listen(3000, () => {
  console.log("Server started at port 3000\n")
})