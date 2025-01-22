import React from "react";
import { Container } from "react-bootstrap";
import ButtonCreate from "./ButtonCreate.jsx";
import ButtonShowInvoices from "./ButtonShowInvoices.jsx";


function HomePage() {
  return (
    <Container style={{ padding: "1em" }}>
      <h2>Welcome to Invoice Generator</h2>
      <p>Press any button below</p>

      <ButtonCreate />
        {"   "}
      <ButtonShowInvoices />
    </Container>
  );
}

export default HomePage;
