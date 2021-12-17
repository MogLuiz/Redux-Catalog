// Hooks
import { useState, useEffect } from "react";

// API
import api from "../../services/api";

// Components
import CatalogItem from "./items/CatalogItem";

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
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
