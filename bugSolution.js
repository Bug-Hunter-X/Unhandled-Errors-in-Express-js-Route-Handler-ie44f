const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database operation to fetch user data
    // Simulate database operation that might fail
    const user = await someDatabaseOperation(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function someDatabaseOperation(userId) {
  //Simulate database operation that might fail
  //Replace this with your actual database operation
  if (userId === 'error') {
    throw new Error('Database error');
  } else {
    return {userId: userId};
  }
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});