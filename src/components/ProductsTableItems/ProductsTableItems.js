import "./ProductsTableItems.css";
import React, { useEffect, useState } from "react";
import { FaPen, FaShoppingBasket } from "react-icons/fa";
import { API } from "../../constance/URL";
import WindowDelete from "../WindowDelete/WindowDelete";
import WindowEditAdd from "../WindowEditAdd/WindowEditAdd";

function ProductsTableItems({ setIsDeleteModalVisible, setIsBasketClicked }) {
  const [products, setProducts] = useState([]);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isTableBlurred, setTableBlurred] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [titleEdit, setTitleEdit] = useState("");

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
    setDeleteModalVisible(true);
    setTableBlurred(true);
    setIsBasketClicked(true);
  };

  const closeDeleteModal = () => {
    setTableBlurred(false);
    setDeleteModalVisible(false);
    setIsDeleteModalVisible(false);
    setIsBasketClicked(false);
    setTableBlurred(false);
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
      <table className={`table ${isTableBlurred ? "blur-background" : ""}`}>
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
                  <FaPen
                    className={`w-[40px] delete-change ${
                      isTableBlurred ? "blur-background" : ""
                    }`}
                    onClick={() => {
                      setEditModalVisible(true);
                      setTableBlurred(true);
                    }}
                  />

                  <FaShoppingBasket
                    className="w-[40px] delete-btn"
                    onClick={() => {
                      openDeleteModal(product.id);
                    }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalVisible && (
        <WindowEditAdd
          closeModal={() => {
            setEditModalVisible(false);
            setTableBlurred(false);
          }}
          title="Edit product"
        />
      )}
      {isDeleteModalVisible && (
        <WindowDelete
          closeModal={closeDeleteModal}
          onClick={() => deleteProduct(deleteItemId)}
        />
      )}
    </>
  );
}

export default ProductsTableItems;
