const express = require('express');
const axios = require('axios');

const key = process.env.BASKETBALL_API_KEY;

const app = express();
const PORT = process.env.PORT || 3000;

// Route handler to fetch games from balldontlie API
app.get('/games', async (req, res) => {
    try {
        // Get start_date and end_date from query parameters
        const { start_date, end_date } = req.query;

        // Make request to balldontlie API
        const response = await axios.get('https://www.balldontlie.io/api/v1/games', { 
          headers: {
            Authorization: key
          }
        }, {
            params: {
                start_date,
                end_date
            }
        });

        // Send response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});