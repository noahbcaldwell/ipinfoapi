const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 80;

app.get('/geolocation/:ip', async (req, res) => {
  try {
    const ip = req.params.ip;
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const geolocationData = response.data;

    res.json({
      ip: geolocationData.ip,
      city: geolocationData.city,
      region: geolocationData.region,
      country: geolocationData.country,
      loc: geolocationData.loc,
      org: geolocationData.org,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
