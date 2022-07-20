import React, { Component } from "react";
import {getPokemonByInput, getAllPokemon, getPokemonByUrl} from '../crud/crud';
import PokemonBox from "./PokemonBox";
import NavBar from './NavBar'
export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemonApi: undefined,
          allPokemons: undefined,
          pokemonInput: undefined,
          pokeLength: 8,
        };
    }
    componentDidMount() {

        if(this.state.pokemonApi === undefined){
            let arr = [];
            for(let i = 0; i < this.state.pokeLength; i++){
                getPokemonByInput(Names[i].name)
                    .then((data) => {
                        arr.push(data);
                    })
            }
            this.setState({allPokemons: arr})
        }else{
            getPokemonByInput(this.state.pokemonInput)
            .then((data) => {
                let arr = [data]
                this.setState({pokemonApi: arr});
            })
        } 
    }
    render() {
        const {} = this.props;
        return (
            <>
                <NavBar 
                    pokemonInput={this.state.pokemonInput}
                    setPokemonInput={(v) => {this.setState({pokemonInput: v})}}
                    pokemon={this.state.pokemonApi}
                    setPokemon={(v) => {this.setState({pokemonApi: v})}}
                    names={Names}
                />
                <PokemonBox 
                    pokemon={this.state.pokemonApi !== undefined ? this.state.pokemonApi : this.state.allPokemons}
                    pokeLength={this.state.pokeLength}
                    setPokeLength={(v) => {this.setState({pokeLength: v})}}
                    setAllPokemons={(v) => {this.setState({allPokemons: v})}}
                />
            </>
        )
    }
}

const Names = [
    {
        "name": "bulbasaur",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "ivysaur",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "venusaur",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "charmander",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "charmeleon",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "charizard",
        "types": [
            "fire",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "squirtle",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "wartortle",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "blastoise",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "caterpie",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "metapod",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "butterfree",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "weedle",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "kakuna",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "beedrill",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "pidgey",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "pidgeotto",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "pidgeot",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "rattata",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "raticate",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "spearow",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "fearow",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "ekans",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "arbok",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "pikachu",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "raichu",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "sandshrew",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "sandslash",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "nidoran-f",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "nidorina",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "nidoqueen",
        "types": [
            "poison",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "nidoran-m",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "nidorino",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "nidoking",
        "types": [
            "poison",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "clefairy",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "clefable",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "vulpix",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "ninetales",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "jigglypuff",
        "types": [
            "normal",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "wigglytuff",
        "types": [
            "normal",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "zubat",
        "types": [
            "poison",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "golbat",
        "types": [
            "poison",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "oddish",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "gloom",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "vileplume",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "paras",
        "types": [
            "bug",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "parasect",
        "types": [
            "bug",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "venonat",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "venomoth",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "diglett",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "dugtrio",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "meowth",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "persian",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "psyduck",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "golduck",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "mankey",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "primeape",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "growlithe",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "arcanine",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "poliwag",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "poliwhirl",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "poliwrath",
        "types": [
            "water",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "abra",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "kadabra",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "alakazam",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "machop",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "machoke",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "machamp",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "bellsprout",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "weepinbell",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "victreebel",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "tentacool",
        "types": [
            "water",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "tentacruel",
        "types": [
            "water",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "geodude",
        "types": [
            "rock",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "graveler",
        "types": [
            "rock",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "golem",
        "types": [
            "rock",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "ponyta",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "rapidash",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "slowpoke",
        "types": [
            "water",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "slowbro",
        "types": [
            "water",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "magnemite",
        "types": [
            "electric",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "magneton",
        "types": [
            "electric",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "farfetchd",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "doduo",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "dodrio",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "seel",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "dewgong",
        "types": [
            "water",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "grimer",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "muk",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "shellder",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "cloyster",
        "types": [
            "water",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "gastly",
        "types": [
            "ghost",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "haunter",
        "types": [
            "ghost",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "gengar",
        "types": [
            "ghost",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "onix",
        "types": [
            "rock",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "drowzee",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "hypno",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "krabby",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "kingler",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "voltorb",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "electrode",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "exeggcute",
        "types": [
            "grass",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "exeggutor",
        "types": [
            "grass",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "cubone",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "marowak",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "hitmonlee",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "hitmonchan",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "lickitung",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "koffing",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "weezing",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "rhyhorn",
        "types": [
            "ground",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "rhydon",
        "types": [
            "ground",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "chansey",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "tangela",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "kangaskhan",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "horsea",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "seadra",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "goldeen",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "seaking",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "staryu",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "starmie",
        "types": [
            "water",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "mr-mime",
        "types": [
            "psychic",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "scyther",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "jynx",
        "types": [
            "ice",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "electabuzz",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "magmar",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "pinsir",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "tauros",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "magikarp",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "gyarados",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "lapras",
        "types": [
            "water",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "ditto",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "eevee",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "vaporeon",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "jolteon",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "flareon",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "porygon",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "omanyte",
        "types": [
            "rock",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "omastar",
        "types": [
            "rock",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "kabuto",
        "types": [
            "rock",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "kabutops",
        "types": [
            "rock",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "aerodactyl",
        "types": [
            "rock",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "snorlax",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "articuno",
        "types": [
            "ice",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "zapdos",
        "types": [
            "electric",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "moltres",
        "types": [
            "fire",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "dratini",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "dragonair",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "dragonite",
        "types": [
            "dragon",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "mewtwo",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "mew",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "chikorita",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "bayleef",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "meganium",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "cyndaquil",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "quilava",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "typhlosion",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "totodile",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "croconaw",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "feraligatr",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "sentret",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "furret",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "hoothoot",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "noctowl",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "ledyba",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "ledian",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "spinarak",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "ariados",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "crobat",
        "types": [
            "poison",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "chinchou",
        "types": [
            "water",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "lanturn",
        "types": [
            "water",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "pichu",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "cleffa",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "igglybuff",
        "types": [
            "normal",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "togepi",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "togetic",
        "types": [
            "fairy",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "natu",
        "types": [
            "psychic",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "xatu",
        "types": [
            "psychic",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "mareep",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "flaaffy",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "ampharos",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "bellossom",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "marill",
        "types": [
            "water",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "azumarill",
        "types": [
            "water",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "sudowoodo",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "politoed",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "hoppip",
        "types": [
            "grass",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "skiploom",
        "types": [
            "grass",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "jumpluff",
        "types": [
            "grass",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "aipom",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "sunkern",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "sunflora",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "yanma",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "wooper",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "quagsire",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "espeon",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "umbreon",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "murkrow",
        "types": [
            "dark",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "slowking",
        "types": [
            "water",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "misdreavus",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "unown",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "wobbuffet",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "girafarig",
        "types": [
            "normal",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "pineco",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "forretress",
        "types": [
            "bug",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "dunsparce",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "gligar",
        "types": [
            "ground",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "steelix",
        "types": [
            "steel",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "snubbull",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "granbull",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "qwilfish",
        "types": [
            "water",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "scizor",
        "types": [
            "bug",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "shuckle",
        "types": [
            "bug",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "heracross",
        "types": [
            "bug",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "sneasel",
        "types": [
            "dark",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "teddiursa",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "ursaring",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "slugma",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "magcargo",
        "types": [
            "fire",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "swinub",
        "types": [
            "ice",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "piloswine",
        "types": [
            "ice",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "corsola",
        "types": [
            "water",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "remoraid",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "octillery",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "delibird",
        "types": [
            "ice",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "mantine",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "skarmory",
        "types": [
            "steel",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "houndour",
        "types": [
            "dark",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "houndoom",
        "types": [
            "dark",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "kingdra",
        "types": [
            "water",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "phanpy",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "donphan",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "porygon2",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "stantler",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "smeargle",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "tyrogue",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "hitmontop",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "smoochum",
        "types": [
            "ice",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "elekid",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "magby",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "miltank",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "blissey",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "raikou",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "entei",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "suicune",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "larvitar",
        "types": [
            "rock",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "pupitar",
        "types": [
            "rock",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "tyranitar",
        "types": [
            "rock",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "lugia",
        "types": [
            "psychic",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "ho-oh",
        "types": [
            "fire",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "celebi",
        "types": [
            "psychic",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "treecko",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "grovyle",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "sceptile",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "torchic",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "combusken",
        "types": [
            "fire",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "blaziken",
        "types": [
            "fire",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "mudkip",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "marshtomp",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "swampert",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "poochyena",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "mightyena",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "zigzagoon",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "linoone",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "wurmple",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "silcoon",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "beautifly",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "cascoon",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "dustox",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "lotad",
        "types": [
            "water",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "lombre",
        "types": [
            "water",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "ludicolo",
        "types": [
            "water",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "seedot",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "nuzleaf",
        "types": [
            "grass",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "shiftry",
        "types": [
            "grass",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "taillow",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "swellow",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "wingull",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "pelipper",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "ralts",
        "types": [
            "psychic",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "kirlia",
        "types": [
            "psychic",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "gardevoir",
        "types": [
            "psychic",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "surskit",
        "types": [
            "bug",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "masquerain",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "shroomish",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "breloom",
        "types": [
            "grass",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "slakoth",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "vigoroth",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "slaking",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "nincada",
        "types": [
            "bug",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "ninjask",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "shedinja",
        "types": [
            "bug",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "whismur",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "loudred",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "exploud",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "makuhita",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "hariyama",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "azurill",
        "types": [
            "normal",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "nosepass",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "skitty",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "delcatty",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "sableye",
        "types": [
            "dark",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "mawile",
        "types": [
            "steel",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "aron",
        "types": [
            "steel",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "lairon",
        "types": [
            "steel",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "aggron",
        "types": [
            "steel",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "meditite",
        "types": [
            "fighting",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "medicham",
        "types": [
            "fighting",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "electrike",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "manectric",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "plusle",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "minun",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "volbeat",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "illumise",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "roselia",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "gulpin",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "swalot",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "carvanha",
        "types": [
            "water",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "sharpedo",
        "types": [
            "water",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "wailmer",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "wailord",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "numel",
        "types": [
            "fire",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "camerupt",
        "types": [
            "fire",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "torkoal",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "spoink",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "grumpig",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "spinda",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "trapinch",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "vibrava",
        "types": [
            "ground",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "flygon",
        "types": [
            "ground",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "cacnea",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "cacturne",
        "types": [
            "grass",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "swablu",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "altaria",
        "types": [
            "dragon",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "zangoose",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "seviper",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "lunatone",
        "types": [
            "rock",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "solrock",
        "types": [
            "rock",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "barboach",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "whiscash",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "corphish",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "crawdaunt",
        "types": [
            "water",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "baltoy",
        "types": [
            "ground",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "claydol",
        "types": [
            "ground",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "lileep",
        "types": [
            "rock",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "cradily",
        "types": [
            "rock",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "anorith",
        "types": [
            "rock",
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "armaldo",
        "types": [
            "rock",
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "feebas",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "milotic",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "castform",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "kecleon",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "shuppet",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "banette",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "duskull",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "dusclops",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "tropius",
        "types": [
            "grass",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "chimecho",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "absol",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "wynaut",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "snorunt",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "glalie",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "spheal",
        "types": [
            "ice",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "sealeo",
        "types": [
            "ice",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "walrein",
        "types": [
            "ice",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "clamperl",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "huntail",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "gorebyss",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "relicanth",
        "types": [
            "water",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "luvdisc",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "bagon",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "shelgon",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "salamence",
        "types": [
            "dragon",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "beldum",
        "types": [
            "steel",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "metang",
        "types": [
            "steel",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "metagross",
        "types": [
            "steel",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "regirock",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "regice",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "registeel",
        "types": [
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "latias",
        "types": [
            "dragon",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "latios",
        "types": [
            "dragon",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "kyogre",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "groudon",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "rayquaza",
        "types": [
            "dragon",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "jirachi",
        "types": [
            "steel",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "deoxys-normal",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "turtwig",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "grotle",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "torterra",
        "types": [
            "grass",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "chimchar",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "monferno",
        "types": [
            "fire",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "infernape",
        "types": [
            "fire",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "piplup",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "prinplup",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "empoleon",
        "types": [
            "water",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "starly",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "staravia",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "staraptor",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "bidoof",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "bibarel",
        "types": [
            "normal",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "kricketot",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "kricketune",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "shinx",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "luxio",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "luxray",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "budew",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "roserade",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "cranidos",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "rampardos",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "shieldon",
        "types": [
            "rock",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "bastiodon",
        "types": [
            "rock",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "burmy",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "wormadam-plant",
        "types": [
            "bug",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "mothim",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "combee",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "vespiquen",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "pachirisu",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "buizel",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "floatzel",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "cherubi",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "cherrim",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "shellos",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "gastrodon",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "ambipom",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "drifloon",
        "types": [
            "ghost",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "drifblim",
        "types": [
            "ghost",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "buneary",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "lopunny",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "mismagius",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "honchkrow",
        "types": [
            "dark",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "glameow",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "purugly",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "chingling",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "stunky",
        "types": [
            "poison",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "skuntank",
        "types": [
            "poison",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "bronzor",
        "types": [
            "steel",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "bronzong",
        "types": [
            "steel",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "bonsly",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "mime-jr",
        "types": [
            "psychic",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "happiny",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "chatot",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "spiritomb",
        "types": [
            "ghost",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "gible",
        "types": [
            "dragon",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "gabite",
        "types": [
            "dragon",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "garchomp",
        "types": [
            "dragon",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "munchlax",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "riolu",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "lucario",
        "types": [
            "fighting",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "hippopotas",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "hippowdon",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "skorupi",
        "types": [
            "poison",
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "drapion",
        "types": [
            "poison",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "croagunk",
        "types": [
            "poison",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "toxicroak",
        "types": [
            "poison",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "carnivine",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "finneon",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "lumineon",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "mantyke",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "snover",
        "types": [
            "grass",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "abomasnow",
        "types": [
            "grass",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "weavile",
        "types": [
            "dark",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "magnezone",
        "types": [
            "electric",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "lickilicky",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "rhyperior",
        "types": [
            "ground",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "tangrowth",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "electivire",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "magmortar",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "togekiss",
        "types": [
            "fairy",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "yanmega",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "leafeon",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "glaceon",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "gliscor",
        "types": [
            "ground",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "mamoswine",
        "types": [
            "ice",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "porygon-z",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "gallade",
        "types": [
            "psychic",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "probopass",
        "types": [
            "rock",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "dusknoir",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "froslass",
        "types": [
            "ice",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "rotom",
        "types": [
            "electric",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "uxie",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "mesprit",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "azelf",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "dialga",
        "types": [
            "steel",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "palkia",
        "types": [
            "water",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "heatran",
        "types": [
            "fire",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "regigigas",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "giratina-altered",
        "types": [
            "ghost",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "cresselia",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "phione",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "manaphy",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "darkrai",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "shaymin-land",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "arceus",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "victini",
        "types": [
            "psychic",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "snivy",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "servine",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "serperior",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "tepig",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "pignite",
        "types": [
            "fire",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "emboar",
        "types": [
            "fire",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "oshawott",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "dewott",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "samurott",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "patrat",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "watchog",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "lillipup",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "herdier",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "stoutland",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "purrloin",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "liepard",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "pansage",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "simisage",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "pansear",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "simisear",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "panpour",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "simipour",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "munna",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "musharna",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "pidove",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "tranquill",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "unfezant",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "blitzle",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "zebstrika",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "roggenrola",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "boldore",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "gigalith",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "woobat",
        "types": [
            "psychic",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "swoobat",
        "types": [
            "psychic",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "drilbur",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "excadrill",
        "types": [
            "ground",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "audino",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "timburr",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "gurdurr",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "conkeldurr",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "tympole",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "palpitoad",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "seismitoad",
        "types": [
            "water",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "throh",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "sawk",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "sewaddle",
        "types": [
            "bug",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "swadloon",
        "types": [
            "bug",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "leavanny",
        "types": [
            "bug",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "venipede",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "whirlipede",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "scolipede",
        "types": [
            "bug",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "cottonee",
        "types": [
            "grass",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "whimsicott",
        "types": [
            "grass",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "petilil",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "lilligant",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "basculin-red-striped",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "sandile",
        "types": [
            "ground",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "krokorok",
        "types": [
            "ground",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "krookodile",
        "types": [
            "ground",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "darumaka",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "darmanitan-standard",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "maractus",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "dwebble",
        "types": [
            "bug",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "crustle",
        "types": [
            "bug",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "scraggy",
        "types": [
            "dark",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "scrafty",
        "types": [
            "dark",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "sigilyph",
        "types": [
            "psychic",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "yamask",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "cofagrigus",
        "types": [
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "tirtouga",
        "types": [
            "water",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "carracosta",
        "types": [
            "water",
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "archen",
        "types": [
            "rock",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "archeops",
        "types": [
            "rock",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "trubbish",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "garbodor",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "zorua",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "zoroark",
        "types": [
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "minccino",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "cinccino",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "gothita",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "gothorita",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "gothitelle",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "solosis",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "duosion",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "reuniclus",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "ducklett",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "swanna",
        "types": [
            "water",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "vanillite",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "vanillish",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "vanilluxe",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "deerling",
        "types": [
            "normal",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "sawsbuck",
        "types": [
            "normal",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "emolga",
        "types": [
            "electric",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "karrablast",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "escavalier",
        "types": [
            "bug",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "foongus",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "amoonguss",
        "types": [
            "grass",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "frillish",
        "types": [
            "water",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "jellicent",
        "types": [
            "water",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "alomomola",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "joltik",
        "types": [
            "bug",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "galvantula",
        "types": [
            "bug",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "ferroseed",
        "types": [
            "grass",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "ferrothorn",
        "types": [
            "grass",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "klink",
        "types": [
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "klang",
        "types": [
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "klinklang",
        "types": [
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "tynamo",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "eelektrik",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "eelektross",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "elgyem",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "beheeyem",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "litwick",
        "types": [
            "ghost",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "lampent",
        "types": [
            "ghost",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "chandelure",
        "types": [
            "ghost",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "axew",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "fraxure",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "haxorus",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "cubchoo",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "beartic",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "cryogonal",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "shelmet",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "accelgor",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "stunfisk",
        "types": [
            "ground",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "mienfoo",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "mienshao",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "druddigon",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "golett",
        "types": [
            "ground",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "golurk",
        "types": [
            "ground",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "pawniard",
        "types": [
            "dark",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "bisharp",
        "types": [
            "dark",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "bouffalant",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "rufflet",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "braviary",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "vullaby",
        "types": [
            "dark",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "mandibuzz",
        "types": [
            "dark",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "heatmor",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "durant",
        "types": [
            "bug",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "deino",
        "types": [
            "dark",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "zweilous",
        "types": [
            "dark",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "hydreigon",
        "types": [
            "dark",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "larvesta",
        "types": [
            "bug",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "volcarona",
        "types": [
            "bug",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "cobalion",
        "types": [
            "steel",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "terrakion",
        "types": [
            "rock",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "virizion",
        "types": [
            "grass",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "tornadus-incarnate",
        "types": [
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "thundurus-incarnate",
        "types": [
            "electric",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "reshiram",
        "types": [
            "dragon",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "zekrom",
        "types": [
            "dragon",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "landorus-incarnate",
        "types": [
            "ground",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "kyurem",
        "types": [
            "dragon",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "keldeo-ordinary",
        "types": [
            "water",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "meloetta-aria",
        "types": [
            "normal",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "genesect",
        "types": [
            "bug",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "chespin",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "quilladin",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "chesnaught",
        "types": [
            "grass",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "fennekin",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "braixen",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "delphox",
        "types": [
            "fire",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "froakie",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "frogadier",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "greninja",
        "types": [
            "water",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "bunnelby",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "diggersby",
        "types": [
            "normal",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "fletchling",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "fletchinder",
        "types": [
            "fire",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "talonflame",
        "types": [
            "fire",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "scatterbug",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "spewpa",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "vivillon",
        "types": [
            "bug",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "litleo",
        "types": [
            "fire",
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "pyroar",
        "types": [
            "fire",
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "flabebe",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "floette",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "florges",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "skiddo",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "gogoat",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "pancham",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "pangoro",
        "types": [
            "fighting",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "furfrou",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "espurr",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "meowstic-male",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "honedge",
        "types": [
            "steel",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "doublade",
        "types": [
            "steel",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "aegislash-shield",
        "types": [
            "steel",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "spritzee",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "aromatisse",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "swirlix",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "slurpuff",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "inkay",
        "types": [
            "dark",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "malamar",
        "types": [
            "dark",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "binacle",
        "types": [
            "rock",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "barbaracle",
        "types": [
            "rock",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "skrelp",
        "types": [
            "poison",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "dragalge",
        "types": [
            "poison",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "clauncher",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "clawitzer",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "helioptile",
        "types": [
            "electric",
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "heliolisk",
        "types": [
            "electric",
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "tyrunt",
        "types": [
            "rock",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "tyrantrum",
        "types": [
            "rock",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "amaura",
        "types": [
            "rock",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "aurorus",
        "types": [
            "rock",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "sylveon",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "hawlucha",
        "types": [
            "fighting",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "dedenne",
        "types": [
            "electric",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "carbink",
        "types": [
            "rock",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "goomy",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "sliggoo",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "goodra",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "klefki",
        "types": [
            "steel",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "phantump",
        "types": [
            "ghost",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "trevenant",
        "types": [
            "ghost",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "pumpkaboo-average",
        "types": [
            "ghost",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "gourgeist-average",
        "types": [
            "ghost",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "bergmite",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "avalugg",
        "types": [
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "noibat",
        "types": [
            "flying",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "noivern",
        "types": [
            "flying",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "xerneas",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "yveltal",
        "types": [
            "dark",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "zygarde-50",
        "types": [
            "dragon",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "diancie",
        "types": [
            "rock",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "hoopa",
        "types": [
            "psychic",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "volcanion",
        "types": [
            "fire",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "rowlet",
        "types": [
            "grass",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "dartrix",
        "types": [
            "grass",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "decidueye",
        "types": [
            "grass",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "litten",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "torracat",
        "types": [
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "incineroar",
        "types": [
            "fire",
            "dark"
        ],
        "favorit": false
    },
    {
        "name": "popplio",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "brionne",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "primarina",
        "types": [
            "water",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "pikipek",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "trumbeak",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "toucannon",
        "types": [
            "normal",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "yungoos",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "gumshoos",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "grubbin",
        "types": [
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "charjabug",
        "types": [
            "bug",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "vikavolt",
        "types": [
            "bug",
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "crabrawler",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "crabominable",
        "types": [
            "fighting",
            "ice"
        ],
        "favorit": false
    },
    {
        "name": "oricorio-baile",
        "types": [
            "fire",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "cutiefly",
        "types": [
            "bug",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "ribombee",
        "types": [
            "bug",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "rockruff",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "lycanroc-midday",
        "types": [
            "rock"
        ],
        "favorit": false
    },
    {
        "name": "wishiwashi-solo",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "mareanie",
        "types": [
            "poison",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "toxapex",
        "types": [
            "poison",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "mudbray",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "mudsdale",
        "types": [
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "dewpider",
        "types": [
            "water",
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "araquanid",
        "types": [
            "water",
            "bug"
        ],
        "favorit": false
    },
    {
        "name": "fomantis",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "lurantis",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "morelull",
        "types": [
            "grass",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "shiinotic",
        "types": [
            "grass",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "salandit",
        "types": [
            "poison",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "salazzle",
        "types": [
            "poison",
            "fire"
        ],
        "favorit": false
    },
    {
        "name": "stufful",
        "types": [
            "normal",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "bewear",
        "types": [
            "normal",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "bounsweet",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "steenee",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "tsareena",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "comfey",
        "types": [
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "oranguru",
        "types": [
            "normal",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "passimian",
        "types": [
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "wimpod",
        "types": [
            "bug",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "golisopod",
        "types": [
            "bug",
            "water"
        ],
        "favorit": false
    },
    {
        "name": "sandygast",
        "types": [
            "ghost",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "palossand",
        "types": [
            "ghost",
            "ground"
        ],
        "favorit": false
    },
    {
        "name": "pyukumuku",
        "types": [
            "water"
        ],
        "favorit": false
    },
    {
        "name": "type-null",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "silvally",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "minior-red-meteor",
        "types": [
            "rock",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "komala",
        "types": [
            "normal"
        ],
        "favorit": false
    },
    {
        "name": "turtonator",
        "types": [
            "fire",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "togedemaru",
        "types": [
            "electric",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "mimikyu-disguised",
        "types": [
            "ghost",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "bruxish",
        "types": [
            "water",
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "drampa",
        "types": [
            "normal",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "dhelmise",
        "types": [
            "ghost",
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "jangmo-o",
        "types": [
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "hakamo-o",
        "types": [
            "dragon",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "kommo-o",
        "types": [
            "dragon",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "tapu-koko",
        "types": [
            "electric",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "tapu-lele",
        "types": [
            "psychic",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "tapu-bulu",
        "types": [
            "grass",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "tapu-fini",
        "types": [
            "water",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "cosmog",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "cosmoem",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "solgaleo",
        "types": [
            "psychic",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "lunala",
        "types": [
            "psychic",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "nihilego",
        "types": [
            "rock",
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "buzzwole",
        "types": [
            "bug",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "pheromosa",
        "types": [
            "bug",
            "fighting"
        ],
        "favorit": false
    },
    {
        "name": "xurkitree",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "celesteela",
        "types": [
            "steel",
            "flying"
        ],
        "favorit": false
    },
    {
        "name": "kartana",
        "types": [
            "grass",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "guzzlord",
        "types": [
            "dark",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "necrozma",
        "types": [
            "psychic"
        ],
        "favorit": false
    },
    {
        "name": "magearna",
        "types": [
            "steel",
            "fairy"
        ],
        "favorit": false
    },
    {
        "name": "marshadow",
        "types": [
            "fighting",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "poipole",
        "types": [
            "poison"
        ],
        "favorit": false
    },
    {
        "name": "naganadel",
        "types": [
            "poison",
            "dragon"
        ],
        "favorit": false
    },
    {
        "name": "stakataka",
        "types": [
            "rock",
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "blacephalon",
        "types": [
            "fire",
            "ghost"
        ],
        "favorit": false
    },
    {
        "name": "zeraora",
        "types": [
            "electric"
        ],
        "favorit": false
    },
    {
        "name": "meltan",
        "types": [
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "melmetal",
        "types": [
            "steel"
        ],
        "favorit": false
    },
    {
        "name": "grookey",
        "types": [
            "grass"
        ],
        "favorit": false
    },
    {
        "name": "thwackey",
        "types": [
            "grass"
        ],
        "favorit": false
    }
];