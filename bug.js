const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data
  // ... error handling missing here
  res.json({ userId });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});