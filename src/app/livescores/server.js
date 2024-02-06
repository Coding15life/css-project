const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Define your API endpoint for live scores
app.get('/api/start_date', async (req, res) => {
  try {
    // Make a request to the balldontlie.io API for live NBA scores
    const response = await axios.get('https://www.balldontlie.io/api/v1/games');
    const liveScores = response.data.data; // Assuming the response contains live scores data
    res.json(liveScores);
  } catch (error) {
    console.error('Error fetching live scores:', error);
    res.status(500).json({ error: 'Unable to fetch live scores' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
