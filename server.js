const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Server running, please check /data for data retrieval.');
});

app.get('/data', (req, res) => {
  const { n, m } = req.query;
  const filePath = path.join(__dirname, 'tmp', 'data', `${n}.txt`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    if (m) {
      const lines = fileContent.split('\n');
      const line = lines[m - 1] || '';
      res.json({ text: line });
    } else {
      res.json({ text: fileContent });
    }
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
