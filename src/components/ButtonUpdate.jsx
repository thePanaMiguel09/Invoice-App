import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ButtonUpdate({ id }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/updateinvoice/" + id);
  }

  return (
    <Button variant="warning" size="lg" onClick={handleClick}>
      Update
    </Button>
  );
}

export default ButtonUpdate;
