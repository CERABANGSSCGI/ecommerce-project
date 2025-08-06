import "../styles/ProductContainer.css";
import AddToCart from "../units/AddToCart.jsx";

const ProductContainer = (item) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            src={item.photoURLink}
            alt=""
            className="card-img-top mt-1 mb-3"
          />
          <h1 className="card-title">{item.productName}</h1>
          <h5 className="card-subtitle text-secondary">
            PHP {item.productPrice}
          </h5>
          <p className="card-text mt-3">Click the card title for more description</p>
          <div className="add-cart">
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
