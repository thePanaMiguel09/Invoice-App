import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import DetailInvoice from "./DetailInvoice.jsx";
import ButtonUpdate from "./ButtonUpdate.jsx";

function InvoiceRow({ id, description, onDelete }) {
  return (
    <Row>
      <Col as={"h5"}>{id}</Col>
      <Col as={"h5"}>{description}</Col>
      <Col>
          <Button variant="danger" size="lg" onClick={onDelete}>
            Delete
          </Button>
          {"   "}
          <DetailInvoice id={id} />
          {"   "}
          <ButtonUpdate id={id} />
      </Col>
    </Row>
  );
}

export default InvoiceRow;
