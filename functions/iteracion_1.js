/*Iteración #1: Buscar el máximo
function sum(numberOne , numberTwo) {
  // insert code
}*/

function sum(numberOne , numberTwo){
    if(numberOne > numberTwo){
        console.log(numberOne);
    }else if (numberOne < numberTwo){
        console.log(numberTwo);
    }else{
        console.log("Los números son iguales");
    }
}

sum(54,66);