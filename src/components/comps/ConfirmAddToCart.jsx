import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { apiCart } from "../../api";

const ConfirmAddToCart = (item) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleAdd = async (id, amount) => {
    try {
      await apiCart.post("/add-to-cart", { productID: id, quantity: amount });
      alert("Sucessfully Added");
    } catch (err) {
      setError("Failed to fetch the Items.");
      console.error(err);
    }
  };

  return (
    <>
      <button className="modal-button" variant="primary" onClick={handleOpen}>
        {" "}
        Add To Cart
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want this item to be added to the cart?
        </Modal.Body>
        <Modal.Footer>
          <button
            className="modal-button"
            variant="secondary"
            onClick={handleClose}
          >
            No
          </button>
          <button
            className="modal-button"
            variant="dark"
            onClick={() => handleAdd(item.product.products.productID, 1)}
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmAddToCart;
