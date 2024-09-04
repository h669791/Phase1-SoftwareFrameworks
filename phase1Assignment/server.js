const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve the static files from the Angular build output
app.use(express.static(path.join(__dirname, 'dist/phase1-assignment/browser')));

// Catch all other routes and return the Angular app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/phase1-assignment/browser/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
