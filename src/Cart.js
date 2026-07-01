import React from "react";

function Cart({
  cart,
  total,
  clearCart,
  getTotalItems,
  getTotalPrice,
}) {
  return (
    <div className="cart-section">

      <h2> Your Order</h2>

      {cart.length === 0 ? (

        <p>No Items Added</p>

      ) : (

        <table>

          <thead>

            <tr>

              <th>Item</th>

              <th>Qty</th>

              <th>Total</th>

            </tr>

          </thead>

          <tbody>

            {cart.map((item) => (

              <tr key={item.id}>

                <td>{item.name}</td>

                <td>{item.quantity}</td>

                <td>

                  ₹ {item.price * item.quantity}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

      <div className="summary">

        <h3>

          Total Items : {getTotalItems()}

        </h3>

        <h2>

          ₹ {getTotalPrice()}

        </h2>

        <button
          className="clear-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>

    </div>
  );
}

export default Cart;