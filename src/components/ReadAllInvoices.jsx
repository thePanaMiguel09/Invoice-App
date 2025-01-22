import React, { useState, useEffect } from "react";
import MainContainer from "./MainContainer.jsx";
import { Container, Row, Col } from "react-bootstrap";
import InvoiceRow from "./InvoiceRow.jsx"; // Importa el nuevo componente
import AlertWindow from "./AlertWindow.jsx";
import ButtonMainMenu from "./ButtonMainMenu.jsx";

function ReadAllInvoices() {
  const [invoiceData, setInvoiceData] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertContent, setAlertContent] = useState("");

  function deleteInvoice(id) {
    fetch("/api/deleteinvoice/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          // Si la eliminación fue exitosa, actualiza el estado
          setInvoiceData((prevData) =>
            prevData.filter((invoice) => invoice.id !== id)
          );
          setShow(true);
          setAlertTitle("Invoice Deleted");
          setAlertContent("The invoice was removed");
          console.log(`Deleted invoice with ID: ${id}`);
        } else {
          setShow(true);
          setAlertTitle("Error");
          setAlertContent("The invoice was not removed");
        }
      })
      .catch((err) => {
        console.error("Error deleting invoice:", err);
      });
  }

  function closeAlert() {
    setShow(false);
  }

  useEffect(() => {
    fetch("/api/readinvoice/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((resJson) => {
        const data = resJson.map((item) => ({
          id: item._id,
          description: item.invoiceDescription,
        }));
        setInvoiceData(data);
      })
      .catch((err) => {
        console.error("There were problems:", err);
        setError("Failed to load invoices.");
      });
  }, []);

  return (
    <MainContainer head={"Invoices List"}>
      <Container style={{ color: "white" }}>
        {error && <div className="alert alert-danger">{error}</div>}
        <Row>
          <Col as={"h3"}>ID</Col>
          <Col as={"h3"}>Description</Col>
          <Col as={"h3"}>Actions</Col>
        </Row>
        {invoiceData.map((item) => (
          <InvoiceRow
            key={item.id}
            id={item.id}
            description={item.description}
            onDelete={() => deleteInvoice(item.id)}
          />
        ))}
        <Row>
          <Col>
              <ButtonMainMenu/>
          </Col>
        </Row>

      </Container>
      <AlertWindow
        show={show}
        title={alertTitle}
        content={alertContent}
        close={closeAlert}
      />
    </MainContainer>
  );
}

export default ReadAllInvoices;
