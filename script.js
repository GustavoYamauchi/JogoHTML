document.addEventListener("DOMContentLoaded", function () {
    montarPergunta();

});
//vars
let perguntaIndex = 0;
let respostasIndex = 0;
//arrays
const perguntas = ["Nome", "Data de nascimento / Idade", "Curso", "O que queria ser quando criança", "Carro dos sonhos", "Eu tinha quantos anos nessa imagem?"];
const respostasCorretas = ['a', 'a', 'c', 'a', 'c', 'd'];
const respostas = [ "A - Gustavo Yamauchi Souza Reis", "B - Gustavo Yamauchi de Souza", "C - Gustavo Yamauchi dos Reis", "D - Gustavo Yamauchi",
                    "A - 18", "B - 19", "C - 20", "D - 21", 
                    "A - Jogos Digitais", "B - Engenharia da Computação", "C - Ciencias da Computação", "D - Designer",    
                    "A - Astronauta", "B - Bombeiro", "C - Policial", "D - Piloto",
                    "A - 7 anos", "B - 6 anos", "C - 5 anos", "D - 4 anos",
                    "A - ", "B - ", "C - ", "D - "]


function proxima() {
    divPergunta.innerText = perguntas[perguntaIndex];
}

function montarPergunta() {
    const divPergunta = document.getElementById("pergunta");
    const respostasDivs = document.getElementsByClassName("opcao");
    
    divPergunta.innerText = perguntas[perguntaIndex];
    for (let i = respostasIndex; i <= respostasIndex + 3; i++) {
        respostasDivs[i - respostasIndex].style.backgroundColor = 'black';
        respostasDivs[i - respostasIndex].children[0].innerText = respostas[i];        
    }
}


function verificar(opcao) {
    if(opcao == respostasCorretas[perguntaIndex])
        correta(opcao);
    else
        incorreta(opcao);
}

function correta(opcao) {
    let div = document.getElementById(opcao);
    const next = document.getElementById("next");
    div.style.backgroundColor = 'green';
    next.style.display = 'block';
}

function incorreta(opcao) {
    let div = document.getElementsById(opcao);
    div.style.backgroundColor = 'red';
}

function retry() {
    montarPergunta();
}


function next() {
    perguntaIndex++;
    respostasIndex += 4;
    montarPergunta();
}

