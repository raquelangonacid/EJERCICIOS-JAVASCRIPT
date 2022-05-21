/***Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']*/

const arrayEjemplo = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];


function swap (array, arrayi, arrayj){
    let cambio = arrayi;
    arrayi = arrayj;
    arrayj = cambio;
}

swap(arrayEjemplo, arrayEjemplo[0], arrayEjemplo[3]);
