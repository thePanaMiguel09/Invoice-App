import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function AlertWindow({ title, content, show, close }) {
 
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{content}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"
          onClick={close}
          >Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AlertWindow;
