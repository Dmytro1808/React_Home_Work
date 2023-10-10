import React from "react";
import "./PreviewCard.css";
import myImage from "../assets/Rectangle1085.jpg";
import { FaShoppingBasket } from "react-icons/fa";

function PreviewCard({ data }) {
  return (
    <div className="tab-content grid grid-cols-3 gap-10 flex-wrap">
      {data.map((product) => (
        <div
          key={product.id}
          className="preview-card shadow-[0px_0px_9px_0px_#99999740] rounded-xl preview-custom"
        >
          <div className="rounded-xl overflow-hidden">
            <img
              className="max-w-full w-full h-auto"
              src={myImage}
              alt="img"
            ></img>
          </div>
          <div className="p-4">
            <span className="text-lighgray py-2 px-4 bg-[#EAEAEA;] rounded-md">
              {product.name}
            </span>
            <div className="flex justify-between">
              <span className="uppercase font-bold tracking-[-0.036px] mt-4 text-orange-400">
                {product.quantity}
              </span>
              <span className="font-bold tracking-[-0.036px] mt-4 text-orange-400">
                Кількість: {product.price}
              </span>
            </div>
            <h3 className="mt-4 font-medium text-[20px] leading-[25px] tracking-[-0.036px]">
              <span className="flex gap-4 text-beige">
                <FaShoppingBasket />
                Готовий до відправки
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreviewCard;
