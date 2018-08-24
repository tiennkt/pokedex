import * as Color from "color";
import * as React from "react";
import PokemonTypeColors from "../../enums/PokemonTypeColors";
import "../../styles/PokeDetails.css";
import PokeStats from "./PokeStats";

interface IPokeDetailsProps {
  abilities: [];
  evolutionChain: [];
  height: number;
  id: number;
  moves: [];
  name: string;
  types: any[];
  sprites: any;
  stats: [];
  weight: number;
}

const PokeDetails = (props: IPokeDetailsProps) => {
  const lightColor = PokemonTypeColors[props.types[0].type.name];
  const darkColor = Color(lightColor)
    .darken(0.35)
    .string();
  return (
    <div className="poke-details-container" style={{ borderColor: darkColor }}>
      <div
        className="details-modal-header"
        style={{
          backgroundColor: darkColor
        }}>
        <h2>{props.name}</h2>
      </div>
      <div className="details-modal-content">
        <div className="details-header">
          <img src={props.sprites.front_default} />
          {props.types.map((type: any) => (
            <div
              style={{ color: PokemonTypeColors[type.type.name] }}
              className={`${type.type.name}-type`}>
              {type.type.name}
            </div>
          ))}
          <div>{props.id}</div>
          <PokeStats stats={props.stats} />
        </div>
        <div>{props.height}</div>
        <div>{props.weight}</div>
        <div>{props.name}</div>
        {/* <div>{this.state.evolutionChain}</div> */}
        {/* <div>{this.state.moves}</div> */}
      </div>
    </div>
  );
};

export default PokeDetails;
