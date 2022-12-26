const h1= document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues) //Aca en la funcion btnOnClick no tenemos que agregar los parentesis

function sumarInputValues(event){ 
    console.log({event});
    event.prevenDefault();//Para que la pagina no se recargue cuando se envia el formulario
    const sumaInputs = Number(input1.value) + parseInt(input2.value); //Ambos Number y parseInt sirven para transformar los valores de string a numero
    pResult.innerText = "Resultado: " + sumaInputs;
}