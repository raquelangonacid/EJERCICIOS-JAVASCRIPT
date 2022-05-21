/***Iteración #1: Mix for e includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**/

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categories = [];

for (const movie of movies) {
    for (const categorie of movie.categories) {
        if(!categories.includes(categorie)){
            categories.push(categorie)
            }
        }
        
    }

console.log(categories);


/*
let comedia = [];
let aventura = [];
let accion = [];
let thriller = [];
let animacion = [];

for (const movie of movies) {
    if(movie.categories.includes('comedia')){
        comedia.push(movie);
    }if(movie.categories.includes('aventura')){
        aventura.push(movie);
    }if(movie.categories.includes('acción')){
        accion.push(movie);
    }if(movie.categories.includes('thriller')){
        thriller.push(movie);
    }if(movie.categories.includes('animación')){
        thriller.push(movie);
    }   
}

console.log('Estas son las películas de comedia: ', comedia);
console.log('Estas son las películas de aventura: ', aventura);
console.log('Estas son las películas de acción: ', accion);
console.log('Estas son las películas de thriller: ', thriller);
console.log('Estas son las películas de animación: ', animacion);*/
