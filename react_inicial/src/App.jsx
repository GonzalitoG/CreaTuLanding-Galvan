import Categorias from "./component/Categorias";
import { Navbar } from "./component/Navbar";
import ItemCount from "./component/ItemCount";

function App() {
  const handleAddToCart = (quantity, productName) => {
    alert(`Has agregado ${quantity} de ${productName} al carrito`);
  };

  return (
    <>
      <Navbar />
      <Categorias onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;