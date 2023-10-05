import ButtonPreview from '../../components/ButtonPreview/ButtonPreview';
import './ProductTable.css';
import {FaRegUser} from 'react-icons/fa';
import {VscAdd} from "react-icons/vsc";
import ProductsTableItems from "../../components/ProductsTableItems/ProductsTableItems";

function ProductTable() {
  const productData = [
    {
      id: 1,
      category: 'Laptops',
      name: 'Laptop',
      quantity: 143,
      price: 800,
    },
    {
      id: 2,
      category: 'Mobile',
      name: 'Iphone',
      quantity: 82,
      price: 900,
    },
    {
      id: 3,
      category: 'Headphones',
      name: 'AirPods',
      quantity: 49,
      price: 250,
    },]

  const preview = <FaRegUser  className='FaRegUser ' />;
  const add = <VscAdd className='VscAdd' />;

  return (
    <>
      <div className='header'>
        <a href='#' className='logo-link'>Harvey Norman</a>
      </div>
      <div className='button-div'>
        <ButtonPreview title='Preview' icon={preview}/>
        <ButtonPreview title='Add product' icon={add} />
      </div>
      <div className='mt-[5px]'>
        <h1 className='text-white text-[64px] font-medium leading-normal text-center'>Products</h1>
      </div>
      <div className='flex justify-center items-center mt-[75px]'>
      <ProductsTableItems data={productData} />
      </div>
    </>
  );
}

export default ProductTable;