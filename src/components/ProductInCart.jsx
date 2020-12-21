import React, { Component } from "react";
import { addProductToCart } from "../store/actions/actions";
import "./ProductInCart.css";

class ProductInCart extends Component {
  state = {};
  render() {
    return (
      <div className="cart">
        <div className="product-img">
          <img src={"/images/products/" + this.props.data.product.image}></img>
        </div>

        <div className="product-title">
          <h5>{this.props.data.product.title}</h5>
        </div>

        <div className="qty">
          <h1>Qty: {this.props.data.quantity}</h1>
        </div>

        <div className="price-section">
          <label>Price</label>
          <h3>$ {this.props.data.product.price.toFixed(2)}</h3>

          <label>Total</label>
          <h4>
            $
            {(this.props.data.product.price * this.props.data.quantity).toFixed(
              2
            )}
          </h4>
        </div>

        <div>
          <button className="delete-btn">Delete Item</button>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default ProductInCart;

/**
 * 1 - create css file
 *  2- import css file in line 2
 * 3- wimport ProductInCart from './ProductInCart';
ork in the layout
 *
 */
