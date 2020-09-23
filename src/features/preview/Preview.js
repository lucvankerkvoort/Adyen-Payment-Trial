import React from "react";
import { Link, useParams } from "react-router-dom";

export function Preview() {
  let { type } = useParams();

  return (
    <main className="preview-page">
      <section className="cart">
        <h2>Cart</h2>
        <div className="order-summary">
          <ul className="order-summary-list">
            <li className="order-summary-list-list-item">
              <p className="order-summary-list-list-item-title">Premium Account</p>
              <p className="order-summary-list-list-item-price">5.00</p>
            </li>
          </ul>
        </div>
        <div className="cart-footer">
          <span className="cart-footer-label">Total:</span>
          <span className="cart-footer-amount">5.00</span>
          <Link to={`/checkout/${type}`}>
            <p className="button">Continue to checkout</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
