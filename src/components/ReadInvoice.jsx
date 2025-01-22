import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer.jsx";
import { Col, Container, Row } from "react-bootstrap";
import ItemsInfo from "./itemsInfo.jsx";
import ButtonShowInvoices from "./ButtonShowInvoices.jsx";
function ReadInvoice({ invoiceId }) {
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [itemsInfo, setItemsInfo] = useState([]);
  const [terms, setTerms] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [date, setDate] = useState("");
  const [localInvoiceId, setLocalInvoiceId] = useState("");

  useEffect(() => {
    fetch("/api/readinvoice/" + invoiceId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((res) => {
        setSellerName(res.sellerName);
        setSellerAddress(res.sellerAddress);
        setCustomerName(res.customerName);
        setCustomerAddress(res.customerAddress);
        setText(res.invoiceDescription);
        setDate(res.date);
        setLocalInvoiceId(res._id);
        setItemsInfo(res.items);
        setTerms(res.terms);
        setFinalPrice(res.finalPrice);
      })
      .catch(() => {
        console.log("Hubo un problema");
        setError(true);
      });
  }, [invoiceId]);

  return (
    <div>
      {error ? (
        <MainContainer head={"Invoice"}>
          <p>Error fetching invoice data.</p>
        </MainContainer>
      ) : (
        <MainContainer head={"Invoice"}>
          <Container style={{fontSize: '1.2em'}}>
            <Row style={{marginTop: '2em'}}>
              <Col style={{ textAlign: "left", color: "white" }}>
                <h5>Customer's name and Address</h5>
                {customerName}
                <br />
                {customerAddress}
              </Col>
            </Row>
            <Row style={{marginTop: '2em'}}>
              <Col style={{ textAlign: "left", color: "white" }}>
                <h5>Invoice Information</h5>
                ID: {localInvoiceId}
                <br />
                {new Date(date).toLocaleString()}
              </Col>
            </Row>
            <Row style={{marginTop: '2em'}}>
              <Col style={{ textAlign: "left", color: "white" }}>
                <h5>Invoice Description</h5>
                {text}
              </Col>
            </Row>
            <Row style={{marginTop: '2em'}}>
              <Col style={{ textAlign: "left", color: "white" }}>
                <h5>Products</h5>
                <ItemsInfo itemsInfo={itemsInfo} />
              </Col>
            </Row>
            <Row style={{marginTop: '2em'}}>
              <Col style={{ textAlign: "left", color: "white" }}>
                <h5>Final Price</h5>${finalPrice}
              </Col>
            </Row>
            <Row style={{marginTop: '2em'}}>
              <Col style={{ textAlign: "left", color: "white" }}>
                <h5>Terms</h5>{terms}
              </Col>
            </Row>
            <Row>
              <Col>
              <ButtonShowInvoices/>
              </Col>
            </Row>
          </Container>
        </MainContainer>
      )}
    </div>
  );
}

export default ReadInvoice;
