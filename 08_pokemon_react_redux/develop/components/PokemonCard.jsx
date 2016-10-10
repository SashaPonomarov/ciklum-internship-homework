import React, { Component, PropTypes } from 'react';

import {Card, CardText, CardHeader, CardMedia} from 'material-ui/Card';
import {lightBlueA100, redA700} from 'material-ui/styles/colors';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/'


class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {shadow: 1}
    }

    onMouseOver = () => this.setState({shadow: 5});
    onMouseOut = () => this.setState({shadow: 1});

    render() {
        const { name, happiness, national_id, handleCardClick, favorite } = this.props
        const styles = {
          pokemonCard: {
            width: 200,
            height: 335,
            margin: 10,
            marginBottom: 30,
            cursor: 'pointer',
            backgroundColor: favorite ? lightBlueA100 : 'white',
            position: 'relative'
          },
          favIcon: {
            position: 'absolute',
            top: 10,
            right: 10
          }
        }

        return (
            <Card 
                style={styles.pokemonCard}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={() => {handleCardClick(national_id, favorite)}}
                zDepth={this.state.shadow}
            >
                <CardHeader 
                    title={name}
                >
                    {favorite ? <FavoriteIcon color={redA700} style={styles.favIcon} /> : ''}
                </CardHeader>
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


PokemonCard.propTypes = {
    handleCardClick: PropTypes.func,
};

export default PokemonCard