import "./ProductPreview.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import { Link } from "react-router-dom";

function ProductPreview() {
  return (
    <>
      <div className="header">
        <Link to="/Login" className="logo-link">
          Harvey Norman
        </Link>
      </div>
      <div className="flex justify-center items-center mt-[60px] mb-[60px]">
        <PreviewCard />
      </div>
    </>
  );
}

export default ProductPreview;
