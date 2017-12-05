import React from 'react';
import PropTypes from 'prop-types';

export default class PokemonDisplay extends React.PureComponent {

  static propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    }),
    onClickButton: PropTypes.func,
    isSelected: PropTypes.bool
  };

  onClick = () => {
    this.props.onClickButton(this.props.pokemon);
  };

  render() {
    return (
      <li
        style={{color: this.props.isSelected ? 'red' : 'black'}}>
        <button onClick={this.onClick}>GO!</button>
        <span>{this.props.pokemon.name}</span>
      </li>
    )
  };
}