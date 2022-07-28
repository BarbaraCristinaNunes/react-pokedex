import React, { Component } from "react";
import PokemonBox from "./PokemonBox";
import NavBar from './NavBar'
import pokemons from '../assets/pokemons.json';
// import {getPokemonEvolution, getPokemonByInput} from '../crud/crud';
export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemonApi: undefined,
          allPokemons: undefined,
          pokemonByType: undefined,
          pokemonInput: undefined,
          favorites: undefined,
          pokeLength: 8,
          type: undefined,
        };
    }
    componentDidMount() {
        // localStorage.clear();
        
        if(this.state.pokemonApi === undefined && this.state.pokemonByType === undefined){

            if(!localStorage.getItem("favorites")){
                localStorage.setItem("favorites", "");
            }

            showAllPokemons();            

            /*
            CODE TO GET ALL POKEMONS 

            for(let i = 1; i < 906; i++){
                getPokemonByInput(i)
                .then((data) => {
                    let object ={
                        id: data.id, 
                        name: data.species.name, 
                        types: [], 
                        favorit: false, 
                        image: data.sprites.front_default, 
                        powers: [],
                        evolutions: undefined,
                    }
                    ;
                    // console.log(pokemon.name, pokemon.types)
                    data.types.forEach((element) => {
                    // console.log(element.type.name)
                    object.types.push(element.type.name)
                    })
                    data.abilities.forEach((element) => {
                        // console.log(element.type.name)
                        object.powers.push(element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1))
                    })
                    let dataEvolve = undefined;
                    let evolutions = [];
                    getPokemonEvolution(data.species.name)
                        .then((evolution) => {
                        //   console.log("evolution ", evolution);
                          dataEvolve = evolution;

                          evolutions.push(dataEvolve.species.name);
                          if(dataEvolve.evolves_to){
                            dataEvolve.evolves_to.forEach((evolve) => {
                              evolutions.push(evolve.species.name);
                              if(evolve.evolves_to){
                                evolve.evolves_to.forEach((element) => {
                                  evolutions.push(element.species.name);
                                })
                              }
                            })
                          }
                          object.evolutions = evolutions;
                          arr.push(object);
                        })
                })   
            }
            console.log("arr", arr)
            */
            this.setState({allPokemons: pokemons.data.slice(0, this.state.pokeLength)})
            // this.setState({allPokemons: arr})
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
                    type={this.state.type}
                    setType={(v) => {this.setState({type: v})}}
                    setPokeLength={(v) => {this.setState({pokeLength: v})}}
                    setPokemonByType={(v) => {this.setState({pokemonByType: v})}}
                    allPokemons={this.state.allPokemons}
                    setAllPokemons={(v) => {this.setState({allPokemons: v})}}
                    showAllPokemons={showAllPokemons()}
                />
                <PokemonBox 
                    pokemon={
                        this.state.pokemonApi !== undefined ? this.state.pokemonApi 
                        : 
                        this.state.pokemonByType !== undefined ? this.state.pokemonByType 
                        : 
                        this.state.allPokemons
                    }
                    pokeLength={this.state.pokeLength}
                    setPokeLength={(v) => {this.setState({pokeLength: v})}}
                    setAllPokemons={(v) => {this.setState({allPokemons: v})}}
                    setPokemonByType={(v) => {this.setState({pokemonByType: v})}}
                    type={this.state.type}
                    setType={(v) => {this.setState({type: v})}}
                    setPokemonInput={(v) => {this.setState({pokemonInput: v})}}
                    setPokemon={(v) => {this.setState({pokemonApi: v})}}
                />
            </>
        )
    }
}

function showAllPokemons(){
    pokemons.data.map((pokemon) => {
        if(localStorage.getItem("favorites") && 
        localStorage.getItem("favorites").split(",").includes(pokemon.name)){
            pokemon.favorit = true;
        }
        return pokemon;
    });
    return pokemons.data;
}