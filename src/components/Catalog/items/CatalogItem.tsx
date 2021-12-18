// Packages
import React from "react";

// Actions
import { addProductToCartRequest } from "../../../store/modules/cart/actions";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Types
import { IProduct } from "../../../store/modules/cart/types";
import { IStoreState } from "../../../store";

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IStoreState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

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
      <button
        type="button"
        onClick={handleAddProductToCart}
        disabled={hasFailedStockCheck}
      >
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
