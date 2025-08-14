import { apiCart } from "../../api.js";
import "../styles/ProductContainer.css";
import AddToCart from "../units/AddToCart.jsx";
import ProductModal from "./ProductModal.jsx";

const ProductContainer = (item) => {
  const handleAdd = async (id, amount) => {
    try {
      await apiCart.post("/add-to-cart", { productID: id, quantity: amount });
      alert("Successfully Added")
    } catch (err) {
      setError("Failed to fetch the Items.");
      console.error(err);
    }
  };

  console.log(item);

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
            {(item.productPrice).toLocaleString("en-ph", {
              style: "currency",
              currency: "PHP",
            })}
          </h5>
          <div className="mt-3 mb-3">
            <ProductModal products={item} />
          </div>
          <div className="btn-group">
            <button className="btn btn-dark">-</button>
            <div className="quantity bg-light"></div>
            <button className="btn btn-dark">+</button>
          </div>
          <div className="add-cart">
            <AddToCart handleAdd={() => handleAdd(item.productID, 1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
