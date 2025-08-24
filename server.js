const express = require('express');
const app = express();
const port = 8001;

// Serve static files from project root
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});