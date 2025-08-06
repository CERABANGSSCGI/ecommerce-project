import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBarCustomer from "../components/comps/NavBarCustomer.jsx";
import "./Cart.css";
import { useState } from "react";
import CartItems from "../components/comps/CartItems.jsx";

function Cart() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [cartItems, setCartItems] = useState([
    {
      _id: "1",
      name: "Barako Beans",
      price: 250,
      quantity: 2,
      image: "/images/barako.jpg",
    },
    {
      _id: "2",
      name: "Arabica Beans",
      price: 300,
      quantity: 1,
      image: "/images/arabica.jpg",
    },
    {
      _id: "3",
      name: "Arabica Beans",
      price: 300,
      quantity: 1,
      image: "/images/arabica.jpg",
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <NavBarCustomer />
      <h1>Cart</h1>
      <div className="cart-container container d-flex">
        <div className="row d-flex mt-5 gap-3">
          {cartItems.map((item, index) => {
            const totalPerItem = item.price * item.quantity;
            return (
              <div className="checkout-item-container" key={index}>
                <CartItems
                  productName={item.name}
                  photoURLink={item.image}
                  productPrice={item.price}
                  productQuantity={item.quantity}
                  productTotalPrice={totalPerItem}
                  minusQuantity={() => handleQuantityChange(item._id, -1)}
                  addQuantity={() => handleQuantityChange(item._id, 1)}
                />
              </div>
            );
          })}

          <div className="computation position-fixed bg-secondary d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="payment-method text-center">
              <h3>Computation</h3>
              <h5>Payment Method</h5>
              <form action="" onSubmit="">
                <input
                  type="radio"
                  name="payment-method"
                  id="COD"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="COD">Cash On Delivery</label>

                <input
                  type="radio"
                  name="payment-method"
                  id="GCash"
                  value="GCash"
                  checked={paymentMethod === "GCash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="GCash">GCash</label>
              </form>
            </div>
            <div className="actual-computation">Subtotal: PHP {total}</div>
            <p>Tax(12%): PHP {total * 0.12}</p>
            <h5>
              Total Price:{" "}
              {(total * 1.12).toLocaleString("en-ph", {
                style: "currency",
                currency: "PHP",
              })}
            </h5>
            <button className="btn btn-light">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
