import Image from "next/image"
import style from "./page.module.css"

export default async function Home() {

  const resposta = await fetch("https://fakestoreapi.com/products/")
  const data = await resposta.json();

  return (

    <main className={style.body}>
      {data.map((products) =>
        <div className={style.card} key={products.id}>
          <h1>{products.title.slice(0,16)+"..."}</h1>
          <Image width={300} height={300} src={products.image} />
          <h3 className={style.preco}>R$: {products.price}</h3>
          <p>{products.description.slice(0,1000)+"..."}</p>
          <p>{products.category}</p>
        </div>
      )}
    </main>
  );
}