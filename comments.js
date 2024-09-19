// Create web server
// Create a web server that listens on port 3000 and serves the following routes:
// GET /comments - returns a list of comments
// POST /comments - creates a new comment
// DELETE /comments - deletes all comments

// A comment has the following schema:
// {
//   "id": 1,
//   "body": "comment text"
// }

// The server should store comments in memory (i.e. in a variable) on the server. It should start empty and comments should persist until the server is restarted. The server should be implemented using Node.js and Express.

// You should submit a zip file with the complete Node.js project, including all necessary files. You can assume that the person reviewing your code has Node.js installed.

// To run the server, the reviewer should be able to run npm install followed by npm start and then use a tool like Postman to interact with the API.

// The server should be able to handle errors gracefully, and should return sensible error messages in response to invalid requests.

// If you have any questions about the requirements, please ask.

// To submit your code, please upload a zip file containing all necessary files. You can assume that the person reviewing your code has Node.js installed.

// To run the server, the reviewer should be able to run npm install followed by npm start and then use a tool like Postman to interact with the API.

// The server should be able to handle errors gracefully, and should return sensible error messages in response to invalid requests.

// If you have any questions about the requirements, please ask.

// To submit your code, please upload a zip file containing all necessary files. You can assume that the person reviewing your code has Node.js installed.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send('Comment added');
});

app.delete('/comments', (req, res) => {
  comments = [];
  res.send('Comments deleted');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${