const h1= document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){ 
    const sumaInputs = Number(input1.value) + parseInt(input2.value); //Ambos Number y parseInt sirven para transformar los valores de string a numero
    pResult.innerText = "Resultado: " + sumaInputs;
}