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
// URL da API de previsão do tempo
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

// Usando o Axios para fazer a solicitação GET à API de previsão do tempo
axios.get(apiUrl)
    .then(response => {
        const dadosDoTempo = response.data;
        const descricaoDoTempo = dadosDoTempo.weather[0].description;
        const temperatura = (dadosDoTempo.main.temp - 273.15).toFixed(1);
        console.log('Chef: Verificando a previsão do tempo para a inauguração do "Node Café"...');
        console.log(`Chef: Previsão: ${descricaoDoTempo}`);
        console.log(`Chef: Temperatura: ${temperatura}°C`);
        console.log('Chef: Parece que teremos um dia maravilhoso para a inauguração!');
        console.log('Chef: Venha ao "Node Café" e desfrute de nossas deliciosas refeições!');
    })
    .catch(error => {
        console.error('Chef: Desculpe, algo deu errado ao buscar informações de previsão do tempo:', error.message);
    });