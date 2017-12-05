import React from 'react';

import pokelist from './pokemock.json';
import PokemonDisplay from './PokemonDisplay';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selected: null
    };
    console.log(pokelist);
  }

  componentWillMount() {
    this.setState({
      list: pokelist.results
    });
  }

  selectPokemon = (pokemon) => {
    this.setState({selected: pokemon});
    console.log(pokemon.name);
  }
  
  render() {
    return (
      <ul>
        {this.state.list.map(pokemon => 
          <PokemonDisplay
            key={pokemon.name}
            pokemon={pokemon}
            onClickButton={this.selectPokemon}
            isSelected={this.state.selected === pokemon} />
        )}
      </ul>
    )
  }
}
