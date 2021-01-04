import React, { Component } from "react";
import "./pokemonAttack.css";

class PokemonAttack extends Component {
 

  render() {
    console.log(this.props.attack.nom);
    
    return (
    <div className="pokemon-attack-table">
      <div>
        <p></p>
        <div className="pokemon-attack">
          <div className="pokemon-attack-nom">
            Niveau: {this.props.attack.niveau}
          </div>
          <div className="pokemon-attack-nom">Nom : {this.props.attack.nom}</div>
          <div className="pokemon-attack-nom">
            Puissance : {this.props.attack.puissance}
          </div>
          <div className="pokemon-attack-nom">
            Précision : {this.props.attack.precision}
          </div>
          <div className="pokemon-attack-nom">PP : {this.props.attack.pp}</div>
        </div>
        </div>
      </div>
    );
  }
}

export default PokemonAttack;
