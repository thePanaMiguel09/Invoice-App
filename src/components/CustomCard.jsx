import React, { Children } from "react";
import { Card } from "react-bootstrap";

function CustomCard({ head, children }) {
  return (
    <Card>
      <Card.Header as="h4">{head}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default CustomCard;
