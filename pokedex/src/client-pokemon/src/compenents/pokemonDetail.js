import React, { Component } from "react";
import "./pokemonDetail.css";
import PokemonAttack from "./pokemonAttack";


export default class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elem: this.props.elem,
    };
    var id = this.props.elem.ndex.toString();
    this.img_url =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
      id.padStart(3, "0") +
      ".png";
  }

  closeWindow() {
    window.location.reload(false);
  }

  render() {
    console.log("rendering pokemonDetail");
    console.log(this.state.elem);
    const image = {
      backgroundImage: `url('${this.img_url}')`,
    };
    return (
      <div>
        <div className="pokedex">
          <h1>Détail du pokemon</h1>
          <div className="arrow arrow_left" onClick={this.closeWindow}></div>
          <div className="pokemon-detail">
            <div class="bulle">
              <div className="pokemon-detail-title"> CARACTERISTIQUE :</div>
              <div className="pokemon-detail">
                Taille : {this.state.elem.taille}
              </div>
              <div className="pokemon-detail">
                Espèce : {this.state.elem.espece}
              </div>
              <div className="pokemon-detail">
                Type 1 : {this.state.elem.type1}
              </div>
              <div className="pokemon-detail">
                Type 2 : {this.state.elem.type2}
              </div>
              <div className="pokemon-detail">
                taille : {this.state.elem.taille}
              </div>
            </div>
            <div className="pokemon-detail-image" style={image}></div>
            {this.state.elem.attaques.map((attaques) => (
              <PokemonAttack key={attaques.nom} attack={attaques} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
