import React, {PureComponent} from 'react';
import PokemonCardDetails from './PokemonCardDetails';


export default class PokemonCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pokemonData: null,
        };
    }


    componentWillReceiveProps(nextProps){
        const {selectedPokemon} = nextProps;
        if(!selectedPokemon) return;

        const URL = "https://pokeapi.co/api/v2/pokemon/" + selectedPokemon.toLowerCase() + '/';

        fetch(URL)
            .then(
                (response) => {
                    if(response.status != 200) {
                        throw new Error('Not Found');
                    }

                    return response.json();
                },                
                // ITS THE SAME
                // function(response) {
                //     return response.json();
                // }
            )
            .then(
                (response) => {
                    this.setState({pokemonData: response});
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    render() {
        const {selectedPokemon} = this.props;
        const {pokemonData} = this.state;
        
        if(!selectedPokemon) return null;

        return( 
            <div>
                <h1>Current Pokemon: {selectedPokemon}</h1>
                {
                    pokemonData ?  <PokemonCardDetails pokemonData={pokemonData} /> : null
                }
            </div>
        );
    }
}