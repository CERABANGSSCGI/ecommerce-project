import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/CartItems.css";

const CartItems = ({
  productName,
  productPrice,
  productQuantity,
  productTotalPrice,
  minusQuantity,
  addQuantity,
}) => {
  return (
    <>
      <div className=" ordered-items d-flex bg-secondary">
        <div className="ordered-item-img col-3">
          <img
            src="/src/assets/coffee-black.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="ordered-item-description col-9 d-flex flex-column justify-content-around">
          <h5 className="ms-3 me-3">{productName}</h5>
          <div className="ordered-item-buttons justify-content-around align-items-end d-flex">
            <div className="left-btn d-flex gap-3">
              <p>Qty:</p>
              <div className="btn-group">
                <button className="btn btn-dark" onClick={minusQuantity}>
                  -
                </button>
                <div className="quantity bg-light">{productQuantity}</div>
                <button className="btn btn-dark" onClick={addQuantity}>
                  +
                </button>
              </div>
            </div>
            <p>Price per item: PHP {productPrice} </p>
            <p>Price: PHP {productTotalPrice} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
