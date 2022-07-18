import React, { Component } from "react";
import axios from 'axios';
import PokemonCard from './PokemonCard';
export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemon: undefined,
        };
    }
    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${1}`)
            .then(res => {
                const data = res.data;
                this.setState({ pokemon: data });
                console.log(data)
                console.log(this.pokemon)
            })
            .catch((err) =>
                console.log("nao deu")
            );
        // fetch(`https://pokeapi.co/api/v2/pokemon/${1}`)
        //     .then((res) => res.json())
        //     .then((json) => {
        //         console.log("json", json)
        //         this.setState({
        //             pokemon: json
        //         });
        //     })
    }
    render() {
        const {} = this.props;
        console.log(this.pokemon)
        return (
            <PokemonCard/>
        )
    }
}