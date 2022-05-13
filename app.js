import express from "express";

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

app.listen(3000, function() {
    console.log("we are online");
})