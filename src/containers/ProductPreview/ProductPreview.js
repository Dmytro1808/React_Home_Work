import "./ProductPreview.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

function ProductPreview() {
  const productData = [
    {
      id: 1,
      category: "Fridge",
      name: "Liebherr CNSFD5704",
      quantity: 143,
      price: 859,
    },
    {
      id: 2,
      category: "Mobile",
      name: "Iphone 14",
      quantity: 82,
      price: 900,
    },
    {
      id: 3,
      category: "Headphones",
      name: "AirPods",
      quantity: 79,
      price: 250,
    },
    {
      id: 4,
      category: "Kettle ",
      name: "Smeg KLF03CHMUK",
      quantity: 192,
      price: 189,
    },
    {
      id: 5,
      category: " Vacuum Cleaner",
      name: "Dyson V10 EXTRA",
      quantity: 129,
      price: 389,
    },
    {
      id: 6,
      category: "TV",
      name: "Sony XR42A90KU 42",
      quantity: 249,
      price: 1555,
    },
  ];

  return (
    <>
      <div className="header">
        <a href="#" className="logo-link">
          Harvey Norman
        </a>
      </div>
      <div className="flex justify-center items-center mt-[60px] mb-[60px]">
        <PreviewCard data={productData} />
      </div>
    </>
  );
}

export default ProductPreview;
