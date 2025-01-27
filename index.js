const dotenv = require('dotenv');
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3003;
const baseUrl = 'http://gateway.marvel.com/v1/public';

const getMarvelData = async (endpoint, params) => {
    const ts = Date.now();
    const hash = crypto.createHash('md5').update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY).digest('hex');

    const response = await axios.get(`${baseUrl}/${endpoint}`, {
        params: {
            ts,
            apikey: process.env.PUBLIC_KEY,
            hash,
            ...params
        }
    });

    return response.data.data.results;
};

// Rota para buscar personagens
app.get('/characters', async (req, res) => {
    const characters = await getMarvelData('characters', req.query);
    res.json(characters);
});

app.get('/', (req, res) => {
    res.send('API Marvel');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});