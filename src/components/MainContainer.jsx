import React from "react";
import { Card } from "react-bootstrap";

function MainContainer({ head, children }){
  return (
    <Card bg="dark" text="white">
      <Card.Header as={"h1"} style={{textAlign: "center"}}>{head}</Card.Header>
      <Card.Body style={{color: 'black'}}>{children}</Card.Body>
    </Card>
  );
};

export default MainContainer;
