const nombres = document.querySelector('#nombres')




const obtenerPokemon = () => {
fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
.then(pokemones=>pokemones.json())
.then(pokemones=>mostrarPokemon(pokemones.results))
.catch(error => error)
.finally( ()=>console.log('se termino de ejecutar la api'))
}
obtenerPokemon()



const mostrarPokemon = (pokemones) => {
    for (const pokemon of pokemones){
        nombres.innerHTML = pokemon.name
    }
}






