import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();
var lendas = [
    {
        nome: "Mula sem Cabeça",
        criador: "Luís da Câmara."
    },
    {
        nome: "Curupira",
        criador: "José de Anchieta"
    }
]

app.use(express.json());

app.get("/lendas-urbanas", (req,res) => {

    let lendasFiltradas = lendas.map( (lenda) => { return [ `Ǹome: ${lenda.nome}`, `Ǹome: ${lenda.criador}`] } );
    res.send(lendasFiltradas.join(","));
})

app.get('/', (req, res) => {
    res.send("<html><head><meta name='viewport' content='width=device-'> <body> <h1>BEM VINDO</h1></body></html>")
})

app.get("/lendas-urbanas/:index", (req, res) => {
    res.send([ `Nome: ${lendas[req.params.index].nome }` , `Criador: ${lendas[req.params.index].criador }`].join(", "));
})

app.post("/lendas-urbanas", (req, res) => {
    lendas.push(req.body);
    console.log(lendas.slice(-1)[0].nome);
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