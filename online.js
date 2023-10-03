// No arquivo index.js
const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Node Café! Faça seu pedido online.');
});

app.listen(porta, () => {
    console.log(`Servidor do Node Café rodando em http://localhost:${porta}/`);
});

