// retorna o nome da lenda e tambem o nome da pessoa que escreveu/deu origem a historia
function formataLenda(lenda) {
    if (lenda) {
        return `nome: ${lenda.nome}, criador: ${lenda.criador}`
    }
}

// função para listar todas as lendas urbanas que existem na site.
function listaTodasAsLendas(lendas) {
    if (lendas) {
        return lendas.map ((lenda) => formataLenda(lenda)).join(", ")
    }
}


// funnção para listar as lendas consideradas adequedas para quem tem mais de 18 anos. consideras sangrentas ou assustadoras demais
function listaMaiorDeIdade(lendas) {
    if (lendas) {
        var lendasParaMaioresDeIdade = lendas.filter((lenda) => lenda.paraMaiorIdade)
        return lendasParaMaioresDeIdade.map ((lenda) => formataLenda(lenda)).join(", ")
        
    }
}

function listaMenorDeIdade(lendas) {
    if (lendas) {
        var lendasParaMenoresDeIdade = lendas.filter((lenda) => !lenda.paraMaiorIdade)
        return lendasParaMenoresDeIdade.mep ((lenda) => formataLenda(lenda)).join(", ")
    }
}
module.exports = {
    formataLenda, listaTodasAsLendas, listaMaiorDeIdade, listaMenorDeIdade
}
