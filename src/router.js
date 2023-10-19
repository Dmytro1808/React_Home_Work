import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductTable from "./containers/ProductTable/ProductTable";
import Login from "./containers/Login/Login";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import PrivateRoute from "../src/privateRoute";

function AppRouter() {
  const [products] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/product-table/" element={<ProductTable />} />
          <Route path="/product-preview/" element={<ProductPreview />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetails products={products} />}
          />
        </Route>
        <Route path="*" element={<div>404. Page is not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
