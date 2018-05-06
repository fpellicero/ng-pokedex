import React, { Component } from 'react';
import logo from './logo.svg';
import Pokemons from './Pokemons';
import {Row, Col} from 'react-bootstrap';
import PokemonCardView from './PokemonCard/PokemonCardView';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: ''
    }
  }
  
  selectPokemon(selectedPokemon) {
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
    const {pokemonData} = this.state;
    return (
      <Row>
        <Col xs={4}>
          <ul>
            {
              Pokemons.map((pokemon) => (
                <li>
                  <a href="#" onClick={() => this.selectPokemon(pokemon)}>
                    {pokemon}
                  </a>
                </li>
              ))
            }
          </ul>
        </Col>
        <Col xs={8}>
          {pokemonData && <PokemonCardView pokemonData={pokemonData}/>}
        </Col>
      </Row>
    );
  }
}

export default App;
