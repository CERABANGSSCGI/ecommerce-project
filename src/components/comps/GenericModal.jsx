import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const GenericModal = (item) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleOpen}>
        {" "}
        Open the Modal
      </button>

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
        <Modal.Body>This is the Modal Body</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close the Modal
          </button>
          <button variant="danger" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GenericModal;
