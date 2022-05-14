/*Iteración #2: Buscar la palabra más larga*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longestWord = "";

function findLongestWord(array) {
    for (let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){
            longestWord = array[i];
        }
    }
}    

findLongestWord(avengers);

console.log(longestWord);