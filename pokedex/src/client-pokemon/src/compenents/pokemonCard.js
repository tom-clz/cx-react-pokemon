import React, { Component } from "react";
import "./pokemonCard.css";
import PokemonDetail from "./pokemonDetail";
import ReactDOM from "react-dom";




class PokemonCard extends Component {
  constructor(props) {
    super(props);
    var id = this.props.elem.ndex.toString();
    this.img_url =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
      id.padStart(3, "0") +
      ".png";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    ReactDOM.render(
      <React.StrictMode>
        <PokemonDetail elem = {this.props.elem}/>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
  render() {


    const image = {
      backgroundImage: `url('${this.img_url}')`,
    };
    return (
        <div className="pokemon-card" onClick={this.handleClick}>
          <div className="border-page"> </div>
          <div className="pokemon-card-image" style={image}></div>
          <div className="id-card"> # {this.props.elem.ndex} </div>
          <div className="pokemon-card-name">{this.props.elem.nom}</div>
        </div>
      
    );
  }
}

export default PokemonCard;
