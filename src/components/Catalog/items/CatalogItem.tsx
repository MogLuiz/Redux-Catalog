// Packages
import React from "react";

// Actions
import { addProductToCartRequest } from "../../../store/modules/cart/actions";

// Hooks
import { useDispatch } from "react-redux";

// Types
import { IProduct } from "../../../store/modules/cart/types";

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const dispatch = useDispatch();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleAddProductToCart = () => {
    dispatch(addProductToCartRequest(product));
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
