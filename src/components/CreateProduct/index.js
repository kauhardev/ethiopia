import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


const CreateProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory,setProductCategory] = useState('')
const dispatch = useDispatch()
const {product} = useSelector((s) =>s.create)
console.log(product , 'pro');

  const createProduct = () =>{
    if(productName.trim() === '' || productDes.trim() === '' || productPrice.trim() === '' || productUrl.trim() === '' ){
        alert(404)
    } else{
        let newProduct = {
            id: product.length ? product[product.length - 1].id + 1 : 1,
            quantity:1,
            title: productName,
            image: productUrl,
            description:productDes,
            price:productPrice,
            category: productCategory
        }
        dispatch({type: 'ADD_NEW_PRODUCT', payload: newProduct})
        setProductName("");
        setProductPrice("");
        setProductUrl("");
        setProductDes("");
    }

  }

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div id="create">
      <div className="conteiner">
        <div className="create">
          <div className="input__wrapper">
            <input
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              multiple
              onChange={onChange}
            />
            <label for="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">
               <a ><FaDownload /> </a>
              </span>
              <span className="input__file-button-text">Выберите файл</span>
            </label>
          </div>
          <select onChange={(e) => setProductCategory(e.target.value)}
            // value={productCategory}
            >
            <option value="Завтрак">Завтрак</option>
            <option value="Салаты">Салаты</option>
            <option value="Десерты">Десерты</option>
            <option value="Холодные напитки">Холодные напитки</option>
            <option value="Кофе">Кофе</option>
          </select>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <input
            type="text"
            placeholder="Product Description"
            onChange={(e) => setProductDes(e.target.value)}
            value={productDes}
          />
          <input
            type="text"
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <button onClick={() => createProduct()}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
