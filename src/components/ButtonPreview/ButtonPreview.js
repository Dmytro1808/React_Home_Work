import "./ButtonPreview.css";
import React from "react";
import { Link } from "react-router-dom";

const ButtonPreview = ({ to, onClick, title, icon }) => (
  <Link to={to} className="btn-preview" onClick={onClick}>
    {title}
    {icon}
  </Link>
);

export default ButtonPreview;
