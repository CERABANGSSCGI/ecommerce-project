import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/ProductModal.css";
import { apiCart } from "../../api";
import ConfirmAddToCart from "./ConfirmAddToCart";

const ProductModal = (item) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleAdd = async (id, amount) => {
    try {
      await apiCart.post("/add-to-cart", { productID: id, quantity: amount });
    } catch (err) {
      setError("Failed to fetch the Items.");
      console.error(err);
    }
  };

  return (
    <>
      <button className="modal-button" onClick={handleOpen}>
        {" "}
        Click for more description
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.products.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="product-modal-img col-12 col-md-5">
              <img src={item.products.photoURLink} alt="" />
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <h3>
                  {item.products.productPrice.toLocaleString("en-ph", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </h3>
              </div>
              <div className="row">
                <p>{item.products.productDesc}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="modal-button"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </button>
          <ConfirmAddToCart  product={item} >
            Add to Cart
          </ConfirmAddToCart>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
