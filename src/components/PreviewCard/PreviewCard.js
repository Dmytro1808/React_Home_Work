import React from "react";
import { Link } from "react-router-dom";
import "./PreviewCard.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useEffect, useState } from "react";
import myImageDyson from "../../components/assets/Dyson V15 Detect Absolute vacuum.jpg";
import myImageVenturer from "../../components/assets/Venturer 7 I.jpg";
import myImagedji from "../../components/assets/dji-mini-4-.jpg";
import myImageLG from "../../components/assets/LG 65 SMART 4K.jpg";
import myImagePlaystation from "../../components/assets/playstation-5.jpg";
import myImageBowerswilkins from "../../components/assets/bowerswilkins.jpg";
import { useParams } from "react-router-dom";

function PreviewCard() {
  const idToImageMap = {
    1: myImageDyson,
    2: myImagedji,
    3: myImageVenturer,
    4: myImageLG,
    5: myImagePlaystation,
    6: myImageBowerswilkins,
  };
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://6525466d67cfb1e59ce6ff1f.mockapi.io/items"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [id]);

  return (
    <div className="tab-content grid grid-cols-3 gap-10 flex-wrap">
      {products.map((product) => (
        <Link key={product.id} to={`/product-details/${product.id}`}>
          <div className="preview-card shadow-[0px_0px_9px_0px_#99999740] rounded-xl preview-custom">
            <div className="rounded-2xl overflow-hidden w-[390px] h-[280px]">
              <img
                className="w-[390px] h-[280px]"
                src={idToImageMap[product.id]}
                alt="img"
              ></img>
            </div>
            <div className="p-4">
              <span className="text-lighgray py-2 px-4 bg-[#EAEAEA;] rounded-md">
                {product.name}
              </span>
              <div className="flex justify-between">
                <span className="uppercase font-bold tracking-[-0.036px] mt-4 text-orange-400">
                  {product.price}$
                </span>
                <span className="font-bold tracking-[-0.036px] mt-4 text-orange-400">
                  Quantity: {product.quantity}
                </span>
              </div>
              <h3 className="mt-4 font-medium text-[20px] leading-[25px] tracking-[-0.036px]">
                <span className="flex gap-4 text-beige">
                  <FaShoppingBasket />
                  Ready to ship
                </span>
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PreviewCard;
