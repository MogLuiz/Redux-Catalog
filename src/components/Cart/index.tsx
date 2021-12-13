// Packages
import React from "react";
import { useSelector } from "react-redux";

// Hooks

const Cart: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const state = useSelector((state) => state);

  console.log(state);

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
