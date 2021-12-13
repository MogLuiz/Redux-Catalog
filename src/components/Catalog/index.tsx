// Hooks
import { useState } from "react";
import { useSelector } from "react-redux";

// Types
import { IProduct } from "./types";

const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  return <h1>Catalog</h1>;
};

export default Catalog;
