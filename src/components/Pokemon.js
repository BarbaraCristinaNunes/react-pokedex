import React, { Component } from "react";
import PokemonBox from "./PokemonBox";
import NavBar from './NavBar'
import pokemons from '../assets/pokemons.json';
export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemonApi: undefined,
          allPokemons: undefined,
          pokemonByType: undefined,
          pokemonInput: undefined,
          pokeLength: 8,
          type: undefined,
        };
    }
    componentDidMount() {

        if(this.state.pokemonApi === undefined && this.state.pokemonByType === undefined){
            let arr = [];
            for(let i = 0; i < this.state.pokeLength; i++){
                arr.push(pokemons.data[i]);
            }
            this.setState({allPokemons: arr})
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
                />
            </>
        )
    }
}
