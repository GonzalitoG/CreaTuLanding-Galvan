import React from "react";
import img1 from "../img/categoria1.png";
import img2 from "../img/categoria2.png";
import img3 from "../img/categoria3.png";
import ItemCount from "./ItemCount";

const Categorias = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: "Cafe Brasil", img: img1, stock: 10 },
    { id: 2, name: "Cafe Colombia", img: img2, stock: 8 },
    { id: 3, name: "Cafe Peru", img: img3, stock: 5 },
  ];

  return (
    <section className="contenedor categorias">
      <h2 className="text-center">Cafe de Especialidad</h2>
      <div className="listado-categorias">
        {products.map((product) => (
          <div key={product.id} className="categoria-item">
            <img src={product.img} alt={`Imagen ${product.name}`} />
            <a href="#">{product.name}</a>
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={(quantity) => onAddToCart(quantity, product.name)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
