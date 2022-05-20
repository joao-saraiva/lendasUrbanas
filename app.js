

const express = require("express");
const funcoes = require("./functions")

const router = express.Router();
const app = express();
var lendas = [
    {
        nome: "Mula sem Cabeça",
        criador: "Luís da Câmara.",
        paraMaiorIdade: true
        
    },
    {
        nome: "Curupira",
        criador: "José de Anchieta",
        paraMaiorIdade: false 
    }
]

app.use(express.json());

app.get("/lendas-urbanas", (req,res) => {

    let lendasFiltradas = funcoes.listaTodasAsLendas(lendas);
    res.send(lendasFiltradas);
})

app.get('/', (req, res) => {
    res.send("<html><head><meta name='viewport' content='width=device-'> <body> <h1>BEM VINDO</h1></body></html>")
})

app.get("/lendas-urbanas/:index", (req, res) => {
    let lenda = funcoes.formataLenda(lendas[req.params.index]);
    
    res.send(lenda);
})

app.post("/lendas-urbanas", (req, res) => {
    lendas.push(req.body);
    res.send("<html><head><meta name='viewport' content='width=device-'> <body> <h1>Criado com Sucesso</h1></body></html>");
})

app.put("/lendas-urbanas/:index", (req, res) => {
    lendas[req.params.index] = req.body;

    res.send("<html><head><meta name='viewport' content='width=device-'> <body> <h1>Atualizado com Sucesso</h1></body></html>");
})

app.delete("/lendas-urbanas/:index", (req, res) => {
    lendas.splice(req.params.index, 1);
    res.send("<html><head><meta name='viewport' content='width=device-'> <body> <h1>Deletado com Sucesso</h1></body></html>");
})

app.listen(3000, function() {
    console.log("we are online");
})
