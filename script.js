document.addEventListener("DOMContentLoaded", function () {
    montarPergunta();

});
//vars
let perguntaIndex = 0;
let respostasIndex = 0;
let jogando = 1;
//arrays
const perguntas = ["1 - Nome", "2 - Data de nascimento / Idade", "3 - Curso", "4 - O que queria ser quando criança", "5 - Carro dos sonhos", "6 - Eu tinha quantos anos nessa imagem?", "FIM"];
const respostasCorretas = ['a', 'a', 'c', 'a', 'c', 'd'];
const respostas = [ "A - Gustavo Yamauchi Souza Reis", "B - Gustavo Yamauchi de Souza", "C - Gustavo Yamauchi dos Reis", "D - Gustavo Yamauchi",
                    "A - 18", "B - 19", "C - 20", "D - 21", 
                    "A - Jogos Digitais", "B - Engenharia da Computação", "C - Ciencias da Computação", "D - Designer",    
                    "A - Astronauta", "B - Bombeiro", "C - Policial", "D - Piloto",
                    "A - Lambo", "B - Ferrari", "C - Celta", "D - Po",
					"A - 7 anos", "B - 6 anos", "C - 5 anos", "D - 4 anos",
                    "A - ", "B - ", "C - ", "D - "]


function proxima() {
    divPergunta.innerText = perguntas[perguntaIndex];
}

function montarPergunta() {
    const divPergunta = document.getElementById("pergunta");
    const respostasDivs = document.getElementsByClassName("opcao");
    const resposta = document.getElementById("respostas");
    const img = document.getElementById("img1"); 
	const next = document.getElementById("next");
	const retry = document.getElementById("retry");
    const fim = document.getElementById("FIM");
    next.style.display = 'none';
    retry.style.display = 'none';

    divPergunta.innerText = perguntas[perguntaIndex];
    if(perguntaIndex == perguntas.length - 1){
        resposta.style.display = 'none';
        divPergunta.style.margin = '25%'
    }
    else{
    
        jogando = 1;
    
        for (let i = respostasIndex; i <= respostasIndex + 3; i++) {
            respostasDivs[i - respostasIndex].style.backgroundColor = '#665ca5';
            respostasDivs[i - respostasIndex].children[0].innerText = respostas[i];        
        }
    }
    if(perguntaIndex == 5)
            img.style.display = 'block';
        else
            img.style.display= 'none';
}


function verificar(opcao) {
	if(jogando){
		if(opcao == respostasCorretas[perguntaIndex])
			correta(opcao);
		else
			incorreta(opcao);

		jogando = 0;
	}

}

function correta(opcao) {
    let div = document.getElementById(opcao);
    const next = document.getElementById("next");
    div.style.backgroundColor = 'green';
    next.style.display = 'block';
}

function incorreta(opcao) {
    let div = document.getElementById(opcao);
    const retry = document.getElementById("retry");
    retry.style.display = 'block';
    div.style.backgroundColor = 'red';
}


function next() {
    perguntaIndex++;
    respostasIndex += 4;
    montarPergunta();
}

