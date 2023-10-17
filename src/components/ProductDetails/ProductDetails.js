import "./ProductDetails.css";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center mt-[60px] mb-[60px]">
      <h2>Chosen product is: {id}</h2>
    </div>
  );
}

export default ProductDetails;
