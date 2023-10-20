import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import { FaLongArrowAltLeft, FaCheckCircle } from "react-icons/fa";
import { API } from "../../constance/URL";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${API}/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
    document.body.classList.add("new-body");
    return () => {
      document.body.classList.remove("new-body");
    };
  }, [id]);

  return (
    <>
      <div className="header-details">
        <Link to="/login" className="new-logo-link">
          Harvey Norman
        </Link>
      </div>
      {product && (
        <div className="ml-[80px]">
          <div className="flex items-center gap-10">
            <div>
              <Link to="/product-preview/">
                <FaLongArrowAltLeft size={50} color="white" />
              </Link>
            </div>

            <div>
              <h1 className="text-[30px] text-white font-bold">
                {product.name}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap ml-[30px] mt-[30px] gap-[40px]">
            <div className="rounded-2xl overflow-hidden">
              <img
                className="max-w-full w-[400px] h-auto"
                src={product.img}
                alt="img"
              ></img>
            </div>
            <div className="mt-8">
              <ul>
                <li className="flex items-center text-[25px] font-medium text-white gap-4">
                  <FaCheckCircle size={30} color="white" />
                  It is available
                </li>
                <li className="text-[25px] font-medium text-white gap-4 mt-3">
                  Category: {product.category}
                </li>
                <li className="text-[25px] font-medium text-white gap-4 mt-3">
                  Cost: {product.price}$
                </li>
                <li className="text-[25px] font-medium text-white gap-4 mt-3">
                  Quantity: {product.quantity} items
                </li>
              </ul>
            </div>
            <div className="w-[2000px]">
              <p className="text-[30px] text-white font-bold ml-[50px]">
                Description:
              </p>
              <p className=" text-white text-[20px] ml-[20px]">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
