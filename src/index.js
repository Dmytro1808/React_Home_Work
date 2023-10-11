import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductTable from "./containers/ProductTable/ProductTable.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductTable />
    {/* <Login  /> */}
    {/* <ProductPreview /> */}
  </React.StrictMode>
);
