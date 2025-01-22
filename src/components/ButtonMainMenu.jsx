import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ButtonMainMenu() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Button
      variant="warning"
      onClick={handleClick}
      style={{ marginTop: "2em" }}
    >
      Home
    </Button>
  );
}

export default ButtonMainMenu;
