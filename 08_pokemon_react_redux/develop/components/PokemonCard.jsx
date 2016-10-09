import React, { Component, PropTypes } from 'react';

import {Card, CardText, CardHeader, CardMedia} from 'material-ui/Card';


const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/'


class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {shadow: 1}
    }

    

    onMouseOver = () => this.setState({shadow: 5});
    onMouseOut = () => this.setState({shadow: 1});

    render() {
        const { name, happiness, national_id } = this.props
        const styles = {
          pokemonCard: {
            width: 200,
            height: 335,
            margin: 10,
            marginBottom: 30,
            cursor: 'pointer'
          },
        }
        return (
            <Card 
                style={styles.pokemonCard}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                zDepth={this.state.shadow}
            >
                <CardHeader 
                    title={name}
                />
                <CardMedia>
                    <img src={imgURL+national_id+'.png'} />
                </CardMedia>

                <CardText>
                    <p>happiness: {happiness}</p>
                </CardText>
            </Card>
        )
    }
}




export default PokemonCard