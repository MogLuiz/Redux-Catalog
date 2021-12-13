// Hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// API
import api from "../../services/api";

// Types
import { IProduct } from "./types";

const Catalog = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

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
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
