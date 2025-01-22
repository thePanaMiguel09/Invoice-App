import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ButtonShowInvoices() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/showallinvoices");
  }
  return (
    <Button size="lg" variant="success" onClick={handleClick}>
      Show Invoices
    </Button>
  );
}

export default ButtonShowInvoices;
