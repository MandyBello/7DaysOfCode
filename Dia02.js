const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual sua idade?");
const linguagemProgamacao = prompt("Qual linguagem de programação você está estudando");

alert (`Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagemProgamacao}!`);

const respostaEnquete = prompt(`Você gosta de estudar ${linguagemProgamacao}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (respostaEnquete == 1){
    // dê a resposta positiva
    alert(`Muito bom! Continue estudando ${linguagemProgamacao} e você terá muito sucesso`);
}
if (respostaEnquete == 2){
    // dê a resposta negativa
    alert("Ahh que pena...");
    const resposta = prompt("Já tentou aprender outras linguagens? Responda com o número 1 para SIM ou 2 para NÃO.");
    if (resposta == 1){
        alert("Que ótimo!");
        const linguagem = prompt("Qual linguagem de programação?");
        alert(`Muito bom! Continue estudando ${linguagem} e você terá muito sucesso`);
    }
    if (resposta == 2){
        alert("Ahh que pena...");
    }
}