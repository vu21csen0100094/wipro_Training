// Step 1: Import modules
const express = require('express');
const http = require('http'); 
const { Server } = require("socket.io");

// Step 2: Initialize Express
const app = express();

// Step 3: Create HTTP server (required for socket.io)
const server = http.createServer(app);

// Step 4: Initialize socket.io with CORS
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Step 5: Middleware
app.use(express.json());
app.use(express.static('public')); // serves frontend files

// Step 6: WebSocket connection
io.on('connection', (socket) => {
    console.log("A user connected:", socket.id);

    // Receiving message from client
   socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
});

    socket.on('disconnect', () => {
        console.log("User disconnected:", socket.id);
    });
});

// Step 7: Basic route
app.get('/', (req, res) => {
    res.send("Hello, World!");
});

// Step 8: Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
