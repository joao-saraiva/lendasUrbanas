import express from "express";

const router = express.Router();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("oioio")
})

app.listen(3000, function() {
    console.log("we are online");
})