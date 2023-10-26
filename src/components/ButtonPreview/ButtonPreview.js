import "./ButtonPreview.css";
import React from "react";
import { Link } from "react-router-dom";
function ButtonPreview(props) {
  return (
    <Link to={props.to} className="btn-preview" onClick={props.onClick}>
      {props.title}
      {props.icon}
    </Link>
  );
}

export default ButtonPreview;
