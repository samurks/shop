import React from "react";
import style from "./main.module.css";

const Main = ({ products }) => {
  return (
    <main className={style.main}>
      {products.map((product) => (
        <div className={style.productCard} key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} className={style.productImage} />
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
