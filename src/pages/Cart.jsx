import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBarCustomer from "../components/comps/NavBarCustomer.jsx";
import "./Cart.css";
import { useEffect, useState } from "react";
import CartItems from "../components/comps/CartItems.jsx";
import { apiCart } from "../api.js";

function Cart() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await apiCart.get("/get-cart");
        const allItems = res.data.items;
        setCartItems(allItems);
      } catch (err) {
        setError("Failed to fetch the Items.");
        console.error(err);
      }
    };
    fetchItems();
  }, []);

  const handleQuantityChange = async (id, amount) => {
    try {
      await apiCart.post("/add-to-cart", { productID: id, quantity: amount });
    } catch (err) {
      setError("Failed to fetch the Items.");
      console.error(err);
    }
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productID === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = async () => {
    try {
      await apiCart.patch("/check-out");
    } catch (err) {
      setError("Failed to checkout.");
      console.error(err);
    }
    setCartItems([]);
  };

  const handleRemove = async (id) => {
    try {
      await apiCart.post("/remove-from-cart", { productID: id });
    } catch (err) {
      setError("Failed to fetch the Items.");
      console.error(err);
    }

    setCartItems((prev) => prev.filter((item) => item.productID !== id));
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
          {cartItems.map((item) => {
            const totalPerItem = item.price * item.quantity;
            return (
              <div className="checkout-item-container" key={item.productID}>
                <CartItems
                  productName={item.productName}
                  photoURLink={item.photoURL}
                  productPrice={item.price}
                  productQuantity={item.quantity}
                  productTotalPrice={totalPerItem}
                  minusQuantity={() => handleQuantityChange(item.productID, -1)}
                  addQuantity={() => handleQuantityChange(item.productID, 1)}
                />
                <button onClick={() => handleRemove(item.productID)}>X</button>
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
            <button onClick={handleCheckout} className="btn btn-light">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
