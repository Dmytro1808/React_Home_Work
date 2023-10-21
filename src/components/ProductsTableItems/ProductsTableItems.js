import "./ProductsTableItems.css";
import React, { useEffect, useState } from "react";
import { FaPen, FaShoppingBasket } from "react-icons/fa";
import { API } from "../../constance/URL";
import WindowDelete from "../WindowDelete/WindowDelete";

function ProductsTableItems() {
  const [products, setProducts] = useState([]);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    //запрос нового массива
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);

    closeDeleteModal();
  };

  const openDeleteModal = (id) => {
    setDeleteItemId(id);
    const modal = document.getElementById("modalId");
    if (modal) {
      modal.classList.remove("hidden");
    }

    setDeleteModalVisible(true);
    document.querySelector(".table").classList.add("blur-background");
    document.querySelector(".header").classList.add("blur-background");
    document.querySelector(".button-div").classList.add("blur-background");
  };
  const closeDeleteModal = () => {
    const modal = document.getElementById("modalId");
    if (modal) {
      modal.classList.add("hidden");
    }
    setDeleteModalVisible(false);
    document.querySelector(".table").classList.remove("blur-background");
    document.querySelector(".header").classList.remove("blur-background");
    document.querySelector(".button-div").classList.remove("blur-background");
  };

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
      <div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <span>{product.id}</span>
                </td>
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
                    <FaShoppingBasket
                      className="w-[40px] delete-btn"
                      onClick={() => openDeleteModal(product.id)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isDeleteModalVisible && (
          <WindowDelete
            closeModal={closeDeleteModal}
            onClick={() => deleteProduct(deleteItemId)}
          />
        )}
      </div>
    </>
  );
}

export default ProductsTableItems;
