import Image from "next/image";
import style from "../page.module.css";

export default async function Main() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const dados = await response.json();

  return (
    <main className={style.body}>
      {dados.map((product) => (
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
  );
}
