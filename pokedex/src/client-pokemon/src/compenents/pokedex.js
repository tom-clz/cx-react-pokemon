import React, { Component } from "react";
import PokemonCard from "./pokemonCard";
import "./pokedex.css";
import pokemon_logo from './images/pokemon-logo.png';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      element_courant: [],
      search: "",
    };
    this.input_search = this.input_search.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/pokemons");
    const pokemons_list = await response.json();

    this.setState({
      pokemons: pokemons_list,
      element_courant: pokemons_list[0],
    });
  }

  async input_search(e) {
    console.log("input changed")
    this.setState({ search: e.target.value });
    var url = "http://localhost:8080/pokemons?filter=" + e.target.value
    const response = await fetch(url);
    const pokemons_list = await response.json();
    
    this.setState({
      pokemons: pokemons_list,
      element_courant: pokemons_list[0],
    });
  }

  onClick(element_courant) {

    this.setState({
      element_courant: element_courant,
    });
    console.log(this.state.current_item);
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          <div><img className="pokedex-logo"src={pokemon_logo} alt="logo"/></div>
          <input className="search-bar " placeholder="Recherche" label="Search Pokemon"icon="search"onChange={this.input_search}></input>
          {this.state.pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.ndex} elem={pokemon} event={this.onClick} />
          ))}
          </div>
        </div>

    );
  }
}

export default Pokedex;
