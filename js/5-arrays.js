//declarar un array vacio

const alumnos = [];

//array con valores

const peliculas = ['Ironman 1', 'El rey leon', 'Harry Potter', 'BladeRunner', 2023, true];

function mostrarPeliculas(titulo){
    document.write(`<h2>Lista de peliculas ${titulo}</h2>`)
    document.write(`<ul>`)
    for(let i = 0; i < peliculas.length; i++){
        document.write(`<li>${peliculas[i]}</li>`)
    }
    document.write(`</ul>`)
}

const mostrarPelisNuevas = (arrayPeliculas, titulo) =>{
    document.write(`<h2>${titulo}</h2>`)
    //ejemplo de map
    document.write(`<ul>`)
    arrayPeliculas.map((item)=> document.write(`<li>${item}</li>`))
    document.write(`</ul>`)
}

//mostrar un array
console.log(peliculas);
document.write(peliculas);
document.write('<br>'+ peliculas[0]);
//cantidad de caracteres en un array
document.write(`<p>Cantidad de elementos: ${peliculas.length}</p>`);
document.write(`<p>Ultimo elemento del array: ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Consulto un elemento del array: ${peliculas[20]}</p>`);

mostrarPeliculas('');

//agregar elementos
peliculas.unshift('El grinch','mi pobre angelito');
mostrarPeliculas(`+ 2 elementos (${peliculas.length})`);

peliculas.splice(5,0, 'martes 13 🔪');
mostrarPeliculas(`+ 1 elementos (${peliculas.length})`)

peliculas.push('gladiador');
mostrarPeliculas(`+ 1 elementos (${peliculas.length})</h2>`)
//modificar los elementos del array
peliculas[7] = 'El padrino 1';
mostrarPeliculas(`modificamos un elemento (${peliculas.length})`)

//borrar elementos del array
peliculas.shift();
mostrarPeliculas(`- un elemento (${peliculas.length})`)

peliculas.splice(7,1);
// peliculas.splice(2,3);
// peliculas.splice(2); //borro todos los elementos desde la posicion 2
mostrarPeliculas(`- un elemento (${peliculas.length})`)

peliculas.pop();
mostrarPeliculas(`- un elemento (${peliculas.length})`)

//agregar un par de pelis mas al arreglo
peliculas.push('Ironman 2', 'Ironman 3', 'Rocky 1', 'Rocky 2', 'Rocky 3', 'Ironman 3')


mostrarPeliculas(`, con nuevos elementos (${peliculas.length})`);

//filtrar todos los ironman del arreglo
console.log(peliculas[1].includes('Ironman')) //include devuelve true o false

// const PeliculasIronman = peliculas.filter( () => condicion logica )
// const peliculasIronman = peliculas.filter( (pelicula) =>  pelicula === 'Ironman 3' );
// const peliculasIronman = peliculas.filter( (pelicula) => pelicula.includes('Ironman') === true );
const peliculasIronman = peliculas.filter( (pelicula) => pelicula.includes('Ironman'));
console.log(peliculasIronman);

mostrarPelisNuevas(peliculasIronman, 'Peliculas de Ironman');

//para busquedas de un elemento del array, usar el metodo find
const peliculaBuscada = peliculas.find((item)=> item === 'Harry Potter');
const peliculaBuscada2 = peliculas.find((item)=> item === 'Batman');
console.log(peliculaBuscada);
document.write(`<p>Pelicula buscada: ${peliculaBuscada}</p>`)

//podria modificar el resultado undefined con if-else, operador ternario
document.write(`<p>Pelicula buscada (Batman): ${peliculaBuscada2}</p>`)
