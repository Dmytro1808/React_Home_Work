import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import { FaLongArrowAltLeft, FaCheckCircle } from "react-icons/fa";
import myImageDyson from "../../components/assets/Dyson V15 Detect Absolute vacuum.jpg";
import myImageVenturer from "../../components/assets/Venturer 7 I.jpg";
import myImagedji from "../../components/assets/dji-mini-4-.jpg";
import myImageLG from "../../components/assets/LG 65 SMART 4K.jpg";
import myImagePlaystation from "../../components/assets/playstation-5.jpg";
import myImageBowerswilkins from "../../components/assets/bowerswilkins.jpg";

function ProductDetails() {
  let productImage = null;

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://6525466d67cfb1e59ce6ff1f.mockapi.io/items/${id}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
    document.body.classList.add("new-body");
    return () => {
      document.body.classList.remove("new-body");
    };
  }, [id]);

  if (id === "1") {
    productImage = myImageDyson;
  } else if (id === "2") {
    productImage = myImagedji;
  } else if (id === "3") {
    productImage = myImageVenturer;
  } else if (id === "4") {
    productImage = myImageLG;
  } else if (id === "5") {
    productImage = myImagePlaystation;
  } else if (id === "6") {
    productImage = myImageBowerswilkins;
  }

  return (
    <>
      <div className="header-details">
        <Link to="/Login" className="new-logo-link">
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

          <div className="flex flex-wrap ml-[30px] mt-[30px] gap-[30px]">
            <div className="rounded-2xl overflow-hidden">
              <img
                className="max-w-full w-[350px] h-auto"
                src={productImage}
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
