const express = require('express'); // Importando o Express
const cors = require('cors')
const routes = require('./routes') // Importando aquivos de rotas

const app = express(); //Armazendo a aplicão 

app.use(cors(
    // { origin: 'http://meuapp.com'} Origem de onde está hospedado
))
app.use(express.json()) // Antes de todas as requisições converter o JSON em objeto JS
app.use(routes);

app.listen(3333, () => { // Criando porta
    console.log("Server rodando")
});