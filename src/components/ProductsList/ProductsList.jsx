import React, { useState } from "react";
import styles from "./ProductsList.module.css";
import Counter from "../Counter/Counter";

const Product = ({ product, handleRemove }) => {
  return (
    <div className={styles.product}>
      <Counter quantity={product.quantity} />
      {product.title}
      <button className={styles.button} onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      quantity: 2,
      price: 100
    },
    {
      id: 2,
      title: "Product 2",
      quantity: 10,
      price: 150
    }
  ]);

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleRemove={() => handleRemoveProduct(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
