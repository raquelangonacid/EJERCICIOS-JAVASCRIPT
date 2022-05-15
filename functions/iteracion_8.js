/***Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/

const counterWords = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code'];

let arrayPalabrasVistas = [];

let vecesRepetidas = 0;

function repeatCounter(array){
  for (let i = 0 ; i < array.length; i++){
    if(array[i] === [i]){
      vecesRepetidas += 1;
      i--;
    }
    arrayPalabrasVistas.push(array[i]);
  }
 
  for (let j = 0; j < array.length; j++){
    if(array[j]=== [j]){
      vecesRepetidas += 1;
      j--;
    }
  }
  //console.log(arrayPalabrasVistas);
  console.log(vecesRepetidas);
}

repeatCounter(counterWords);


