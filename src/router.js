import ProductTable from "./containers/ProductTable/ProductTable";
import Login from "./containers/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../src/privateRoute";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/ProductTable" element={<ProductTable />} />
            <Route path="/ProductPreview" element={<ProductPreview />} />
            <Route path="/ProductPreview/:id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<div>404. Page is not found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
