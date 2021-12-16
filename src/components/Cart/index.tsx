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
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
