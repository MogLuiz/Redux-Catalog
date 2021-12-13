// Hooks
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// API
import api from "../../services/api";

// Actions
import { addProductToCart } from "../../store/modules/cart/actions";

// Types
import { IProduct } from "./types";

const Catalog: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const dispatch = useDispatch();

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleAddProductToCart = (product: IProduct) => {
    dispatch(addProductToCart(product));
  };

  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
