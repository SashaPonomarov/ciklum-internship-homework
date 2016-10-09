import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchItems } from '../actions/pokedex.actions';

import PokedexPage from '../components/Pokedex.page.jsx';

class Pokedex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch, firstTime } = this.props
        if (firstTime) {dispatch(fetchItems())}
    }

    render() {
        const { handleLoadClick, isFetching, next } = this.props
        return (
            <PokedexPage
                handleLoadClick={handleLoadClick}
                next={next}
                isFetching={this.props.isFetching}
            />
        );
    }
}

Pokedex.propTypes = {
    handleLoadClick: PropTypes.func,
    flag: PropTypes.bool
}

const mapStateToProps = (state) => ({
        isFetching: state.pokedex.isFetching,
        next: state.pokedex.next,
        firstTime: state.pokedex.firstTime
    }
)

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleLoadClick: (next) => dispatch(fetchItems(next)),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
