const btnG = document.querySelector("#green");
const btnR = document.querySelector("#red");
const btnO = document.querySelector("#og");

btnG.addEventListener("click", () => {
    //troca a cor do fundo para verde, mantém o alinhamento no centro e troca a cor da letra para branco.
    return document.querySelector("body").style = "background-color: green; text-align: center; color: white;";
});

btnR.addEventListener("click", () => {
    //troca a cor do fundo para vermelho, mantém o alinhamento no centro e troca a cor do texto para branco.
    return document.querySelector("body").style = "background-color: red; text-align: center; color: white;";
});

btnO.addEventListener("click", () => {
    //retorna a estilização original da página (alinhamento ao centro).
    return document.querySelector("body").style = "text-align: center;";
});