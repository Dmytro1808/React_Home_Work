import "./ProductsTableItems.css";
import React from "react";
import { FaPen, FaShoppingBasket } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API } from "../../constance/URL";

function ProductsTableItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>
                <span>ID</span>
                <button className="sort-button">
                  <span id="sort-icon-up">&#8593;</span>
                </button>
                <button className="sort-button">
                  <span id="sort-icon-down">&#8595;</span>
                </button>
              </th>
              <th>
                <span>Category</span>
                <button className="sort-button">
                  <span id="sort-icon-up">&#8593;</span>
                </button>
                <button className="sort-button">
                  <span id="sort-icon-down">&#8595;</span>
                </button>
              </th>
              <th>
                <span>Name</span>
                <button className="sort-button">
                  <span id="sort-icon-up">&#8593;</span>
                </button>
                <button className="sort-button">
                  <span id="sort-icon-down">&#8595;</span>
                </button>
              </th>
              <th>
                <span>Quantity</span>
                <button className="sort-button">
                  <span id="sort-icon-up">&#8593;</span>
                </button>
                <button className="sort-button">
                  <span id="sort-icon-down">&#8595;</span>
                </button>
              </th>
              <th>
                <span>Price $</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <span>{product.category}</span>
                </td>
                <td>
                  <span>{product.name}</span>
                </td>
                <td>
                  <span>{product.quantity}</span>
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <span className="actions">
                    <FaPen className="w-[40px] delete-change" />
                    <FaShoppingBasket className="w-[40px] delete-btn" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsTableItems;
