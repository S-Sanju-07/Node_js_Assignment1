// 5. TCP Server and TCP Client

//TCP server

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
    
    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        
        socket.write('Message received loud and clear!');
    });
    
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});


//OUTPUT:

/*# Server output:
Server listening on port 8080
Client connected
Received: Hello Server, this is a new message from the client!
Client disconnected*/



//TCP Client

const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    
    client.write('Hello Server, this is a new message from the client!');
});

client.on('data', (data) => {
    console.log('Server says:', data.toString());
    
    client.end();
});


/*

# Client output:
Connected to server
Server says: Message received loud and clear!
*/