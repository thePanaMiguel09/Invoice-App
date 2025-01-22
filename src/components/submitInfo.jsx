import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitInfo({ itemDescription, itemPrice, handler, buttonHandler }) {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="itemDescription">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item description"
                style={{ border: "solid", borderWidth: "2px" }}
                value={itemDescription}
                onChange={handler}
                name="itemDescription"
              />
              <Form.Text className="text-muted">
                Enter a brief description of the product.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="itemPrice">
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item price"
                style={{ border: "solid", borderWidth: "2px" }}
                value={itemPrice}
                onChange={handler}
                name="itemPrice"
              />
              <Form.Text className="text-muted">
                Enter the product price.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Button
            variant="primary"
            type="button"
            onClick={buttonHandler}
            style={{ marginTop: "2em" }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmitInfo;
