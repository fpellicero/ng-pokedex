import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class PokemonCardDetails extends Component {
    render() {
        const {pokemonData} = this.props;
        return(
            <Row>
                <Col xs={6}>
                    <img src={pokemonData.sprites.front_default}/>
                </Col>
            </Row>
        );
    }
}