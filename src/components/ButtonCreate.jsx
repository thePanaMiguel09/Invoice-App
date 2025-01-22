import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ButtonCreate() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/createinvoice");
  }
  
  return (
    <Button size="lg" variant="primary" onClick={handleClick}>
      Create Invoice
    </Button>
  );
}

export default ButtonCreate;
