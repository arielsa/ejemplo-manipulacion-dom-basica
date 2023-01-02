const h1= document.querySelector ('h1');
const p = document.querySelector('p');
const parrafito= document.querySelector('.parrafito');
const pid = document.querySelector('#pid');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular');

const img= document.createElement('img');

h1.innerHTML='patito';



img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Anas_platyrhynchos_qtl1.jpg/375px-Anas_platyrhynchos_qtl1.jpg');
img.setAttribute('width','10%');


pid.append(img);

function btnOnClick(){
    console.log('escuchado');
}

//fin de la clase 13