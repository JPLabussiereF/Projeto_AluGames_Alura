let jogosAlugados = 1;

function contarEExibirJogosAlugados() {
    console.log(`O total de jogos alugados são "${jogosAlugados}"!`);
}

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagemOpaca = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');


    if(botao.classList.contains("dashboard__item__button--return")){

            if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
                botao.classList.remove("dashboard__item__button--return");
                imagemOpaca.classList.remove("dashboard__item__img--rented");
                botao.textContent = "Alugar";
                jogosAlugados--;
            }
    } else{
            if ((confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`))){
                botao.classList.add("dashboard__item__button--return");
                imagemOpaca.classList.add("dashboard__item__img--rented");
                botao.textContent = "Devolver";
                jogosAlugados++;
            }
    }
    contarEExibirJogosAlugados();
}



// // Desafios a mais: 
// // No projeto Alugames, implemente uma confirmação de devolução.
// // No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
// // Crie um programa que verifica se uma palavra ou frase é um palíndromo.
// function palavraPalindromo(palavra){
//     let separadorPalavra = palavra.split("");
//     let palavraInvertida = separadorPalavra.reverse("");
//     palavraInvertida = palavraInvertida.join("");

//     if(palavra == palavraInvertida){
//         console.log(`A palavra ${palavra}, é um palíndromo"`);
//     }else{
//         console.log(`A palavra ${palavra}, não é um palíndromo"`);
//     }
// }
// palavraPalindromo("reviver");
// // Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
// function ordenarNumeros(num1, num2, num3){
//     const numerosOrdenados = [num1, num2, num3].sort((x, y) => x - y); // O método sort() ordena os elementos do próprio array e retorna o array.
//     console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
// }

// ordenarNumeros(-45, 30, 0); 
// Em JavaScript, .sort((x, y) => x - y) é um método de array que classifica os elementos do array em ordem crescente. A função de comparação (x, y) => x - y é usada para determinar a ordem dos elementos durante a classificação.

// Se a função de comparação retornar um valor negativo, significa que x deve vir antes de y.
// Se a função de comparação retornar um valor positivo, significa que y deve vir antes de x.
// Se a função de comparação retornar zero, significa que x e y são considerados iguais e a ordem entre eles não importa.
// Então, (x, y) => x - y ordena os elementos em ordem crescente, porque subtrair y de x resultará em um número negativo se x for menor que y, em zero se forem iguais 
// e em um número positivo se x for maior que y. Isso é exatamente o que o método .sort() espera para determinar a ordem dos elementos.


// DICAS:
// function exibirStatus(id, tag, texto){
//     let jogoClicado = document.getElementById(`game-${id}`);
//     let campo = document.querySelector(tag);
//     jogoClicado.innerHTML(campo.innerHTML = texto);
// }

// function alterarStatusBotao(){
//     let botao = document.getElementById("btn-reiniciar");
    
//     if(botao.classList.contains("dashboard__item__button")){
//         botao.classList.remove("dashboard__item__button--return");
//         botao.classList.add("dashboard__item__button");
//     }else{
//         botao.classList.remove("dashboard__item__button");
//         botao.classList.add("dashboard__item__button--return");
//     }  
// }
