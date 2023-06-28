const express = require('express');
const app = express();
const path = require('path');
const studentDb = require('./data/student-db');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route to list students
app.get('/students', (req, res) => {
  res.render('index', {
    students: studentDb.getAll()
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
