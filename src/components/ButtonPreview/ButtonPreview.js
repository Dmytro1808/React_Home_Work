import "./ButtonPreview.css";
import React from "react";
import { Link } from "react-router-dom";
function ButtonPreview(props) {
  return (
    <Link to="/ProductPreview" className="btn-preview">
      {props.title}
      {props.icon}
    </Link>
  );
}

export default ButtonPreview;
