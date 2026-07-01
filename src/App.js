import React, { Component } from "react";
import "./App.css";

import img1 from "./images/pizza.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const products = [
  {
    id: 1,
    image: img1,
    name: "Pizza",
    price: 500,
  },
  {
    id: 2,
    image: img2,
    name: "Manchurian",
    price: 200,
  },
  {
    id: 3,
    image: img3,
    name: "Paneer Chilli",
    price: 400,
  },
  {
    id: 4,
    image: img4,
    name: "Noodles",
    price: 300,
  },
  {
    id: 5,
    image: img5,
    name: "Vada Pav",
    price: 100,
  },
  {
    id: 6,
    image: img6,
    name: "Grill Paneer",
    price: 600,
  },
];

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      total: 0,
    };
  }

  // ========================
  // ADD PRODUCT
  // ========================

  addToCart = (product) => {
    const cart = [...this.state.cart];

    const item = cart.find((p) => p.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    this.setState({
      cart,
      total: this.state.total + product.price,
    });
  };

  // ========================
  // REMOVE PRODUCT
  // ========================

  removeFromCart = (product) => {
    const cart = [...this.state.cart];

    const index = cart.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }

      this.setState({
        cart,
        total: this.state.total - product.price,
      });
    }
  };

  // ========================
  // CLEAR CART
  // ========================

  clearCart = () => {
    this.setState({
      cart: [],
      total: 0,
    });
  };

  // ========================
  // TOTAL ITEMS
  // ========================

  getTotalItems = () => {
    let count = 0;

    this.state.cart.forEach((item) => {
      count += item.quantity;
    });

    return count;
  };

  // ========================
  // TOTAL PRICE
  // ========================

  getTotalPrice = () => {
    return this.state.total.toFixed(2);
  };

  // ========================
  // RENDER
  // ========================

  render() {
    return (
      <div className="wrapper">
        {/* HEADER */}

        <div className="header">
          <h1>🍴 Restaurant Menu</h1>
          <p>Choose your favourite food</p>
        </div>

        {/* PRODUCTS */}

        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p className="price">₹ {product.price}</p>

              <div className="buttons">
                <button
                  className="add-btn"
                  onClick={() => this.addToCart(product)}
                >
                  +
                </button>

                <button
                  className="remove-btn"
                  onClick={() => this.removeFromCart(product)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CART */}

        <div className="cart-section">
          <h2>🛒 Your Order</h2>

          {this.state.cart.length === 0 ? (
            <p>No Items Added</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {this.state.cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>

                    <td>{item.quantity}</td>

                    <td>₹ {item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="summary">
            <h3>Total Items : {this.getTotalItems()}</h3>

            <h2>Total : ₹ {this.getTotalPrice()}</h2>

            <button className="clear-btn" onClick={this.clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}