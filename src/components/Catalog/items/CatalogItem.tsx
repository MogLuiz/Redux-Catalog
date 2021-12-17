// Packages
import React from "react";

// Types
import { IProduct } from "../../../store/modules/cart/types";

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={() => handleAddProductToCart(product)}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
