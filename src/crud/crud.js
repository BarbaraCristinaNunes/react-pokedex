import axios from 'axios';
export async function getPokemon(data) {
    const url = `https://pokeapi.co/api/v2/pokemon/${data}`;
    try {
        const res = await axios.get(url);
        console.log("from crud ", res.data);
        return res.data;
    } catch (e) {
        return e;
    }
}