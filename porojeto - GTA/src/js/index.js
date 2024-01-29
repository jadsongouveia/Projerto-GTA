/*
    Objetivo 1 - Quando o usuário clicar no botão de Selção de plataformas deve abrir uma caixa com os botões de seleção de plataformas
        Passo 1 - pegar o botão de seleção de plataformass no JS pra poder verificar quando o usuário clicar em cima dele 

        Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado

        Passo 3 - pegar o clique do usuário no JS

        Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça


    Objetivo 2 - Caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido 
*/
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", ()=> {
    elementoPlataformas.classList.toggle("ativo")
    
});