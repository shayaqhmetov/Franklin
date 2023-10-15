const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Serve the Godot export files
app.use(express.static('path/to/your/Godot/export/folder'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});