const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());  // Allow all origins for now, or configure it more strictly


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  { id: 1, username: 'superadmin', password: 'superpass' },
  { id: 2, username: 'groupadmin', password: 'grouppass' },
  { id: 3, username: 'user', password: 'userpass' },
];

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});



// Error-handling middleware (add at the end of all routes)
app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err.stack); // Log the error details
  res.status(500).send({ message: 'Internal Server Error' });
});


// Serve static Angular files
app.use(express.static(path.join(__dirname, 'dist/phase1-assignment/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/phase1-assignment/browser/index.html'));
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
