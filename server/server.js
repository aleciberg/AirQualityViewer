const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/weather', async (req, res) => {
  const { location } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${location}&key=${apiKey}&aqi=yes`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
