const express = require("express");
const path = require("path");
const app = express();

// Priority serve any static files from the React build
app.use(express.static(path.resolve(__dirname, "./client/dist")));

// Handle API requests
// Assuming you have your API set up in the server directory
// Example: const apiRoutes = require('./server/routes/api');
// app.use('/api', apiRoutes);

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
