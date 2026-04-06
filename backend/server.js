const express = require('express');
const cors = require('cors');
const path = require('path');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.get('/api/items/:id', (req, res) => {
  const item = data.find(i => i.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
