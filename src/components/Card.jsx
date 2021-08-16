import "./Card.css";
import React from "react";

const getColor = () => {
  if (props.red) return "Red";
  if (props.gree) return "Green";
  if (props.Blue) return "Blue";
  if (props.Purple) return "Purple";
  return "";
};

const Card = (props) => {
  return (
    <div className="Card">
      <div className="Header">
        <span className="title">{props.title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Card;
