// Packages
import React from "react";
import { useSelector } from "react-redux";

// Hooks

// Types
import { IStoreState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

const Cart: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const cart = useSelector<IStoreState, ICartItem[]>(
    (state) => state.cart.items
  );

  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Cart;
