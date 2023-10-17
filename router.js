import ProductTable from "./containers/ProductTable/ProductTable";
import Login from "./containers/Login/Login";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/ProductTable" element={<ProductTable />} />
          <Route path="/ProductPreview" element={<ProductPreview />} />
          <Route path="*" element={<div>404. Page is not found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
