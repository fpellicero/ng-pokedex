import React, {Component} from 'react';


export default class PokemonCard extends Component {
    render() {
        const {selectedPokemon} = this.props;
        
        if(!selectedPokemon) return null;

        return( 
            <h1>Current Pokemon: {selectedPokemon}</h1>
        );
    }
}