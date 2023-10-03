// No arquivo cardapio.js

const cardapio = [
    { nome: 'Massa ao Pesto', preco: 18.99 },
    { nome: 'Salmão Grelhado', preco: 22.50 },
    { nome: 'Risoto de Cogumelos', preco: 16.75 },
];

console.log('=== Cardápio do Dia ===');
cardapio.forEach((prato, indice) => {
    console.log(`${indice + 1}. ${prato.nome} - R$${prato.preco.toFixed(2)}`);
});
