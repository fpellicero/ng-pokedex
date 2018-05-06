import React from 'react';
import {Row, Col} from 'react-bootstrap';   

export default ({pokemonData}) => (
    <div>
        <h1>Current Pokemon: {pokemonData.name}</h1>
        <PokemonCardDetails pokemonData={pokemonData} />
    </div>
)

const PokemonCardDetails = ({pokemonData}) => (
    <Row>
        <Col xs={6}>
            <img src={pokemonData.sprites.front_default}/>
        </Col>
    </Row>
);
