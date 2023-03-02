const botao = document.querySelector('button');
let resultDisplay = document.getElementById('hex-color');
let fundo = document.querySelector('body');
let painel = document.getElementById('painel');
let borda = document.querySelector('.result');
const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

botao.addEventListener('click', function(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        let numAle =  Math.floor(Math.random() * arr.length);
       color += arr[numAle];
    }
    resultDisplay.innerHTML = color;
    resultDisplay.style.textShadow = 'none';
    borda.style.backgroundColor = color;
    fundo.style.backgroundColor = color;
})