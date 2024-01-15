const readline = require("readline-sync")

function saldoVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function valorRanking(vitorias, derrotas){
    
    let rank = saldoVitorias(vitorias, derrotas)

    if (rank <= 10){
        return "Ferro"
    } else if (rank >= 11 && rank <= 20){
        return "Bronze"
    } else if (rank >= 21 && rank <= 50){
        return "Prata"
    } else if (rank >= 51 && rank <= 80){
        return "Ouro"
    } else if (rank >= 81 && rank <= 90){
        return "Diamante"
    } else if (rank >= 91 && rank <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}

console.log("Digite -1 para sair \n")

let nomeHeroi = readline.question("\nDigite seu nome: ")

while(nomeHeroi !== "-1"){
    let vitorias = readline.question("Digite seu numero de vitorias: ")
    let derrotas = readline.question("Digite seu numero de derrotas: ")

    let saldo = saldoVitorias(vitorias, derrotas)
    let nivel = valorRanking(vitorias, derrotas)

    console.log("\nO Herói " + nomeHeroi + " tem rank de " + saldo + " e está no nível " + nivel)

    nomeHeroi = readline.question("\nDigite seu nome: ")
}