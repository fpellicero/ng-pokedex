import React, { Component } from 'react';
import logo from './logo.svg';
import Pokemons from './Pokemons';
import {Row, Col} from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPokemon: ''
    }
  }
  
  selectPokemon(selectedPokemon) {
    this.setState({selectedPokemon});
  }

  render() {
    const {selectedPokemon} = this.state;
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
          <PokemonCard selectedPokemon={selectedPokemon}/>
        </Col>
      </Row>
    );
  }
}

export default App;
