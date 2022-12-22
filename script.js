const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> FEO'; //Con esto podemos modificar lo que queremos que muestre el HTML
h1.innerText = 'Patito <br> FEO'; //Con esto podemos modificar lo que queremos que aparezca en la etiqueta como texto.
// console.log(h1.getAttribute('pantalla')); //Manda a llamar el atributo pantalla en el HTML
// h1.setAttribute('pantalla','rojo');//Cambia lo que tenga el atributo adentro

h1.classList.add('rojo');
h1.classList.remove('verde');
h1.classList.toggle('verde');
h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://media2.giphy.com/media/p092OM3vVCXII/giphy.webp');
console.log(img);

pid.append(img);
