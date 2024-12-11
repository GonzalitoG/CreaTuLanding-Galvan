import CartWidget from "./CartWidget";

export const Navbar = () => {
  return (
    <>
      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <a href="index.html">Inicio</a>
          <a href="sobre-nosotros.html">Nosotros</a>
          <a href="productos.html">Tienda</a>
          <a href="servicios.html">Blog</a>
          <a href="contacto.html">Contacto</a>
          {/* Aquí se incluye el CartWidget */}
          <CartWidget />
        </nav>
      </div>
    </>
  );
};
