import "./ProductTable.css";
import { FaRegUser } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import ProductsTableItems from "../../components/ProductsTableItems/ProductsTableItems";
import ButtonPreview from "../../components/ButtonPreview/ButtonPreview";
import { Link } from "react-router-dom";

function ProductTable() {
  const preview = <FaRegUser className="FaRegUser " />;
  const add = <VscAdd className="VscAdd" />;

  return (
    <>
      <div className="header">
        <Link to="/login" className="logo-link">
          Harvey Norman
        </Link>
      </div>
      <div className="button-div">
        <ButtonPreview title="Preview" icon={preview} />
        <ButtonPreview title="Add product" icon={add} />
      </div>
      <div className="mt-[5px]">
        <h1 className="text-white text-[64px] font-medium leading-normal text-center">
          Products
        </h1>
      </div>
      <div className="flex justify-center items-center mt-[40px] mb-[75px]">
        <ProductsTableItems />
      </div>
    </>
  );
}

export default ProductTable;
