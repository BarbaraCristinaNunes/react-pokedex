import axios from 'axios';
export async function getPokemonByInput(data) {
    const url = `https://pokeapi.co/api/v2/pokemon/${data}`;
    try {
        const res = await axios.get(url);
        // console.log("res.data ", res.data)
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

export async function getPokemonEvolution(data) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${data}`;
    try {
        const res = await axios.get(url);
        const evolutionsUrl = res.data.evolution_chain.url;
        const data = await axios.get(evolutionsUrl);
        // console.log("res.data ", data)
        return data.data.chain;
    } catch (e) {
        return e;
    }
}