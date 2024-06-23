const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const FINNHUB_API_KEY = 'YOUR_FINNHUB_API_KEY';

app.use(express.static(path.join(__dirname)));

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${FINNHUB_API_KEY}`);
        const data = response.data;
        const labels = ['Open', 'High', 'Low', 'Current'];
        const prices = [data.o, data.h, data.l, data.c];

        res.json({ labels, prices });
    } catch (error) {
        res.status(500).send('Error fetching data from Finnhub');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
