import axios from 'axios';
export async function getPokemonByInput(data) {
    const url = `https://pokeapi.co/api/v2/pokemon/${data}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (e) {
        return e;
    }
}

export async function getPokemonByUrl(data) {
    const url = data;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (e) {
        return e;
    }
}

// export async function getAllPokemon(data) {
//     const url = "https://pokeapi.co/api/v2/pokemon?limit=811";
//     try {
//         const res = await axios.get(url);
//         return res.data;
//     } catch (e) {
//         return e;
//     }
// }