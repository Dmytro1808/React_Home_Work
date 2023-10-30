import "./ProductTable.css";
import { FaRegUser } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import ProductsTableItems from "../../components/ProductsTableItems/ProductsTableItems";
import WindowEditAdd from "../../components/WindowEditAdd/WindowEditAdd";
import ButtonPreview from "../../components/ButtonPreview/ButtonPreview";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API } from "../../constance/URL";

function ProductTable() {
  const preview = <FaRegUser className="FaRegUser " />;
  const add = <VscAdd className="VscAdd" />;
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isBasketClicked, setIsBasketClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [titleAdd, setTitleAdd] = useState("Add product");
  const [isBlurVisible, setIsBlurVisible] = useState(false);
  const [isTableBlurred, setTableBlurred] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const addProduct = async (newProduct) => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);

    setIsModalVisible(false);
    setIsBlurVisible(false);
    setEditModalVisible(false);
    setTableBlurred(false);
  };
  const fetchProducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProductClick = () => {
    setTitleAdd("Add product");
    setIsBlurVisible(true);
    setIsModalVisible(true);
  };
  const closeEditModal = () => {
    setIsModalVisible(false);
    setIsBlurVisible(false);
  };

  return (
    <>
      <div className="header">
        <Link
          to="/login"
          className={`logo-link ${isBasketClicked ? "blur-background" : ""} ${
            isBlurVisible ? "blur-background" : ""
          }`}
        >
          Harvey Norman
        </Link>
      </div>
      <div className={`button-div ${isBasketClicked ? "blur-background" : ""}`}>
        <ButtonPreview title="Preview" icon={preview} to="/product-preview" />

        <ButtonPreview
          title="Add product"
          icon={add}
          onClick={handleAddProductClick}
        />
        {isModalVisible && (
          <WindowEditAdd
            closeModal={closeEditModal}
            title={titleAdd}
            addProduct={addProduct}
          />
        )}
      </div>

      <div className="mt-[5px]">
        <h1 className="text-white text-[64px] font-medium leading-normal text-center">
          Products
        </h1>
      </div>
      <div
        className={`flex justify-center items-center mt-[40px] mb-[75px] ${
          isBlurVisible ? "blur-background" : ""
        }`}
      >
        <ProductsTableItems
          setIsDeleteModalVisible={setIsDeleteModalVisible}
          setIsBasketClicked={setIsBasketClicked}
          isBlurVisible={isBlurVisible}
          className={`${isBlurVisible ? "blur-background" : ""}`}
          products={products}
          setProducts={setProducts}
        />
      </div>
    </>
  );
}

export default ProductTable;
