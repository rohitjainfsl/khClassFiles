import net from 'net'
const clients = []

const server = net.createServer((socket) => {
    console.log(socket)
    clients.push(socket)

    socket.on('data', (data) => {
        broadcast(data)
    })

    socket.on('error', (error) => {
        console.log(error)
    })

})

function broadcast(data){
    clients.forEach(client => client.write(data))
}

server.listen(8080, () => {
    console.log("Server has stared on port 8080")
})