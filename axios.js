// No arquivo index.js

const axios = require('axios');
//deve ser instalado o dotenv
// npm install dotenv
require('dotenv').config();

// Chave de acesso à API do OpenWeatherMap (você precisa obter uma chave no site do OpenWeatherMap)
const apiKey = process.env.TEMPO_KEY;

// Cidade e país para a consulta
const cidade = 'Limeira';
const pais = 'BR';

// URL da API do OpenWeatherMap
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

// Usando o Axios para fazer a solicitação GET à API do OpenWeatherMap
axios.get(apiUrl)
    .then(response => {
        const dadosDoTempo = response.data;
        console.log(`Chef: Verificando a previsão do tempo para ${cidade}, Brasil...`);
        console.log(`Chef: Condição atual: ${dadosDoTempo.weather[0].description}`);
        console.log(`Chef: Temperatura atual: ${(dadosDoTempo.main.temp - 273.15).toFixed(1)}°C`);
        console.log(`Chef: Umidade: ${dadosDoTempo.main.humidity}%`);
        console.log(`Chef: Velocidade do vento: ${dadosDoTempo.wind.speed} m/s`);
    })
    .catch(error => {
        console.error('Chef: Desculpe, algo deu errado ao buscar informações de previsão do tempo:', error.message);
    });