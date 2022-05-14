/**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

let total = 0;

function average(array) {
  for (let i = 0; i < array.length; i++){
      total += array[i];
  }
    let promedio = total/array.length;
    console.log(promedio);
}

average(numbers);

