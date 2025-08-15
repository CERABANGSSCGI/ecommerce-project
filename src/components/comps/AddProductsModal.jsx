import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { api, apiProduct } from "../../api";

const AddProductsModal = (item) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const [productForm, setProductForm] = useState({
    productName: "",
    photoURL: "",
    price: "",
    productDescription: "",
    category: "",
    addedBy: "",
  });
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiProduct.post("/register-product", productForm);
      alert("Successfully Registered");
      handleClose();
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <>
      <div className="command-buttons">
        <button className="btn " onClick={handleOpen}>
          Add Item
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="productName"
                onChange={handleChange}
                type="name"
                placeholder="e.g. Arabica Coffee"
              />
              {/* <Form.Label>Photo</Form.Label>
              <Form.Control
                name="photoURL"
                onChange={handleChange}
                type="file"
              /> */}
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                onChange={handleChange}
                type="number"
                placeholder="e.g. 150"
              />
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                name="productDescription"
                onChange={handleChange}
                type="text"
                placeholder="e.g. This is the Arabica Coffee"
              />
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                onChange={handleChange}
                placeholder="e.g. Coffee"
              >
                <option value="coffee">Coffee</option>
                <option value="non-coffee">Non-Coffee</option>
                <option value="tools">Tools</option>
                <option value="equipments">Equipments</option>
                <option value="miscs">Miscs</option>
              </Form.Select>
            </Form.Group>
            <button variant="secondary" onClick={handleClose}>
              Close the Modal
            </button>
            <button type="submit" variant="danger">
              Save Changes
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProductsModal;
