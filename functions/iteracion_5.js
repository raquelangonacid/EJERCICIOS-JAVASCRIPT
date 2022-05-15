/**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let totalLongitud = 0;

function averageWord(array){
  for(let i=0; i<array.length; i++){
    if(typeof array[i] === "string"){
      totalLongitud += array[i].length;
    }else{
      totalLongitud += array[i];
    }
  }
}
averageWord(mixedElements);

console.log(totalLongitud);