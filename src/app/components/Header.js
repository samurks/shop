import React from "react";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://static.vecteezy.com/ti/vetor-gratis/t2/8214517-abstract-geometric-logo-or-infinity-line-logo-for-your-company-gratis-vetor.jpg"} 
          alt="Logo da loja"
        />
      </div>
      <p className={style.marketing}>Descubra. Compre na Company. Sua loja online favorita.</p>
      <div className={style.cartIcon}>
      <button className={style.addButton}>Adicionar novo produto</button>
      
        <Image
          width={70}
          height={48}
          src={"https://static.vecteezy.com/system/resources/previews/019/660/726/non_2x/shopping-cart-icon-on-transparent-background-free-png.png"}
        />
      </div>
    </header>
  );
};


