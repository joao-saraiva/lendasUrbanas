function formataLenda(lenda) {
    if (lenda) {
        return `nome: ${lenda.nome}, criador: ${lenda.criador}`
    }
}

function listaTodasAsLendas(lendas) {
    if (lendas) {
        return lendas.map ((lenda) => formataLenda(lenda)).join(", ")
    }
}

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