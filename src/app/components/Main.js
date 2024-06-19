"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../page.module.css";
import Spinner from "./Spinner";

export default function Main() {

  const [listProduct, setProduct] = useState([])

  useEffect( ()=> {
      const getProduct = async() => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProduct(data);
      }
     
      getProduct()
    },[]);


const orderAz = () => {
  const listAux = [...listProduct].sort((a,b) =>
  a.title.localeCompare(b.title) );
  setProduct(listAux);
}

const orderZa = () => {
  const listAux = [...listProduct].reverse((a,b) =>
  a.title.localeCompare(b.title) );

  
  setProduct(listAux);
}

const orderDecrescent = () => {
  const listPrice = [...listProduct].reverse((a, b) => b.price - a.price);

  setProduct(listPrice);

}

const orderCrescent = () => {
  const listPrice = [...listProduct].sort((a, b) => b.price - a.price);

  setProduct(listPrice);
}



if(listProduct[0] == null){
  return <Spinner />
}
  return (
    <>
<div className={style.filters}>
  <div className={style.center}>
    <h2>Ordenar Por:</h2>
    <div className={style.buttons}>
<button onClick={orderAz}> A - Z </button>
<button onClick={orderZa}> Z - A </button>
<button onClick={orderDecrescent}> Maior Valor </button>
<button onClick={orderCrescent}> Menor Valor </button>
</div>
  </div>
</div>
    <main className={style.body}>
      {listProduct.map((product) => (
        <div className={style.card} key={product.id}>
          <h1 className={style.title}>{product.title.slice(0, 16) +"..."}</h1>
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
            className={style.image}
          />
          <h3 className={style.price}>R$: {product.price}</h3>
          <p className={style.description}>{product.description.slice(0, 78) +"..."}</p>
          <p className={style.category}>{product.category}</p>
          <p>Estoque:{product.rating.count}</p>
        </div>
      ))}
    </main>
    </>
  );
}
