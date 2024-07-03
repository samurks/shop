"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../page.module.css";
import Spinner from "./Spinner";

export default function Main() {

  const [listProduct, setListProduct] = useState([])
  const [listComplete, setListComplete] = useState([])
  const [textSearch, setTextSearch] = useState("")
  const [listError, setListError] = useState([])

  useEffect( ()=> {
   
      const getProduct = async() => {
        try{
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setListProduct(data);
        setListComplete(data);
      }
     catch{
      setListError(true);
     }
    }
    getProduct()
    },[]);

    
const search = text => {
  setTextSearch(text);
  
  if(text == ""){
    setListProduct(listComplete);
    return
  }
  const newList = listProduct.filter((product) =>
      product.title.toUpperCase().includes(textSearch.toUpperCase().trim()));

      setListProduct(newList);
  
  }


  

const orderAz = () => {
  const listAux = [...listProduct].sort((a,b) =>
  a.title.localeCompare(b.title) );
  setListProduct(listAux);
}

const orderZa = () => {
  const listAux = [...listProduct].reverse((a,b) =>
  a.title.localeCompare(b.title) );

  
  setListProduct(listAux);
}


const orderDecrescent = () => {
  const listAux = [...listProduct].sort((a, b) => b.price - a.price);

  setListProduct(listAux);

}

const orderCrescent = () => {
  const listAux = [...listProduct].sort((a, b) => a.price - b.price);

  setListProduct(listAux);
}

if (listComplete[0] == null) {
  return  <Spinner />
}

  return (
    <>
<div className={style.filters}>
  <div className={style.center}>
  <h2>Pesquisar:</h2>
  <input type="text" value={textSearch}
      onChange={(event) => search(event.target.value)}/>
    <h2>Ordenar Por:</h2>
    <div className={style.buttons}>
<button onClick={orderAz}> A - Z </button>
<button onClick={orderZa}> Z - A </button>
<button onClick={orderDecrescent}> Menor Valor </button>
<button onClick={orderCrescent}> Maior Valor </button>


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
