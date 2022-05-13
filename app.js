import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();
const lendas = [
    {
        nome: "Mula sem Cabeça"
    },
    {
        nome: "Curupira",
        criador: ""
    }
]

app.use(express.json());

app.get("/lendas-urbanas", (req,res) => {
    res.json(lendas)
})

app.get('/', (req, res) => {
    res.send("<html><head><meta name='viewport' content='width=device-'> <body> <h1>BEM VINDO</h1></body></html>")
})

app.get("/lendas-urbanas/:index", (req, res) => {
    res.send(lendas[req.params.index]);
})

app.post("/lendas-urbanas/", (req, res) => {
    lendas.push(req.body);
    res.send({message: "Criado com Sucesso"});
})

app.put("/lendas-urbanas/:index", (req, res) => {
    lendas[req.params.index] = req.body;
    res.send({message: "Atualizado com Sucesso"});
})

app.delete("/lendas-urbanas/:index", (req, res) => {
    lendas.splice(req.params.index, 1);
    res.send({message: "Deletado com Sucesso"});
})

app.listen(3000, function() {
    console.log("we are online");
})