import ProductTable from "./containers/ProductTable/ProductTable";
import Login from "./containers/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../src/privateRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/producttable" element={<ProductTable />} />
          <Route path="/productpreview" element={<ProductPreview />} />
          <Route path="/productpreview/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<div>404. Page is not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
