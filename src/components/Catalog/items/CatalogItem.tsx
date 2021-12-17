import React from "react";

const CatalogItem: React.FC = () => {
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
