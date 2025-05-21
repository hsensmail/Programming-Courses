// Importing necessary packages
import express from "express"; // Importing Express.js for creating the server
import http from "http"; // Importing Node.js HTTP module to create the server
import { fileURLToPath } from "node:url"; // Importing utility to work with file URLs
import { dirname, join } from "node:path"; // Importing path utilities to handle and transform file paths
import { Server } from "socket.io"; // Importing Socket.IO for real-time web socket communication

// Creating instances
const app = express(); // Creating an Express application instance
const server = http.createServer(app); // Creating an HTTP server instance using the Express app
const io = new Server(server); // Creating a Socket.IO server instance attached to the HTTP server

// Serving the HTML file
const __dirname = dirname(fileURLToPath(import.meta.url)); // Getting the directory name of the current module file
app.get("/", (req, res) => res.sendFile(join(__dirname, "index.html"))); // Defining a route to serve the index.html file

// Defining a connection event handler for Socket.IO
io.on("connection", (socket) => {
  console.log("User Connected To (server) ✅"); // Logging when a user connects

  // Handling the disconnect event
  socket.on("disconnect", () => {
    console.log("User Disconnected From (Server) ❌"); // Logging when a user disconnects
  });
});

// Starting the server
const PORT = 3000; // Defining the port number
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Logging that the server is running
});
