import * as React from "react";

interface IPokeCardProps {
  idNum: number;
  name: string;
  imageUrl: string;
}

const PokeCard = (props: IPokeCardProps) => (
  <div className="card-section profile">
    <div className="profile-title">
      <img className="ava" src={props.imageUrl} />
      <h3>{props.name}</h3>
      <h6>{props.idNum}</h6>
    </div>
    <div className="profile-content">temp</div>
  </div>
);

export default PokeCard;
