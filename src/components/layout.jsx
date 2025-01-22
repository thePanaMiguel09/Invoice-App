import React from "react";
import { Col, Row, Container, Button, Form, Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import TextArea from "../components/textArea.jsx";
import TextField from "../components/textField.jsx";
import ItemsInfo from "../components/itemsInfo.jsx";
import SubmitInfo from "../components/submitInfo.jsx";
import AlertWindow from "../components/AlertWindow.jsx";
import CustomCard from "./CustomCard.jsx";
import ButtonMainMenu from "./ButtonMainMenu.jsx";
import ButtonShowInvoices from "./ButtonShowInvoices.jsx";

function Layout({ updateMode, invoiceId }) {
  const [text, setText] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [itemsInfo, setItemsInfo] = useState([]);
  const [itemDescription, setItemDescription] = useState("");
  const [price, setPrice] = useState("");
  const [terms, setTerms] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function inputHandler(e) {
    if (e.target.name === "invoiceDescription") {
      setText(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "sellerName") {
      setSellerName(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "sellerAddress") {
      setSellerAddress(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "customerName") {
      setCustomerName(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "customerAddress") {
      setCustomerAddress(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "itemDescription") {
      setItemDescription(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "itemPrice") {
      setPrice(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "terms") {
      setTerms(e.target.value);
      console.log(e.target.value);
    }
  }

  function closeAlert() {
    setShow(false);
  }

  function clickHandler() {
    const currentItems = itemsInfo;

    // Sumar el nuevo item directamente al calcular el precio
    const newItem = {
      description: itemDescription,
      price: price,
    };

    const newPrice = parseFloat(price) || 0;

    let totalPrice = newPrice;
    currentItems.forEach((item) => {
      totalPrice += parseFloat(item.price) || 0;
    });

    // Actualizar estado con el nuevo item
    setItemsInfo([...currentItems, newItem]);

    // Actualizar el precio total
    setFinalPrice(totalPrice);

    // Limpiar campos
    setItemDescription("");
    setPrice("");
  }

  function creatreInvoice(event) {
    const data = {
      sellerName: sellerName,
      sellerAddress: sellerAddress,
      customerName: customerName,
      customerAddress: customerAddress,
      items: itemsInfo,
      finalPrice: finalPrice,
      terms: terms,
      invoiceDescription: text,
    };

    fetch("/api/createInvoice", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setShow(true);
        setTitle("The invoice was created successfully");
        setContent("The invoice was saved");
      } else {
        setShow(true);
        setTitle("The invoice was not created successfully");
        setContent("The invoice was not saved, try again");
      }
    });

    console.log("Create invoice");
    event.preventDefault();
  }

  if (updateMode || invoiceId) {
    useEffect(() => {
      if (invoiceId) {
        console.log("Fetching invoice: ", invoiceId);
        fetch("/api/readinvoice/" + invoiceId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch invoice");
            }
            return res.json();
          })
          .then((data) => {
            console.log("Invoice data: ", data);
            // Actualiza los campos con la información de la factura
            setText(data.invoiceDescription || "");
            setSellerName(data.sellerName || "");
            setSellerAddress(data.sellerAddress || "");
            setCustomerName(data.customerName || "");
            setCustomerAddress(data.customerAddress || "");
            setItemsInfo(data.items || []);
            setFinalPrice(data.finalPrice || 0);
            setTerms(data.terms || "");
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }
    }, [invoiceId]);
  }

  function updateInvoice(e) {
    const data = {
      sellerName: sellerName,
      sellerAddress: sellerAddress,
      customerName: customerName,
      customerAddress: customerAddress,
      items: itemsInfo,
      finalPrice: finalPrice,
      terms: terms,
      invoiceDescription: text,
    };

    fetch("api/updateinvoice/" + invoiceId, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setShow(true);
        setTitle("The invoice was updated successfully");
        setContent("The invoice was updated");
      } else {
        setShow(true);
        setTitle("The invoice was not updated successfully");
        setContent("The invoice was not updated");
      }
    });
    e.preventDefault();
  }

  function handleSubmit(e) {
    if (updateMode) {
      updateInvoice(e);
    }
    if (!updateMode) {
      creatreInvoice(e);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Container style={{ marginTop: "20px" }}>
          <Row style={{ marginTop: "2em" }}>
            <Col>
              <CustomCard head={"Invoice Description"}>
                <TextArea
                  label={"Invoice Description"}
                  val={text}
                  changeHandler={inputHandler}
                  name={"invoiceDescription"}
                />
              </CustomCard>
            </Col>
          </Row>
          <Row style={{ marginTop: "2em" }}>
            <Col>
              <CustomCard head={"Seller's Information"}>
                <TextField
                  id={"seller-Name"}
                  label={"Seller's Name"}
                  placeholder={"Enter name"}
                  value={sellerName}
                  onChangeHandler={inputHandler}
                  name={"sellerName"}
                  aid={"Enter full name"}
                />
                <TextField
                  id={"seller-Address"}
                  label={"Seller's Address"}
                  placeholder={"Enter address"}
                  value={sellerAddress}
                  onChangeHandler={inputHandler}
                  name={"sellerAddress"}
                  aid={"Enter full address"}
                />
              </CustomCard>
            </Col>
            <Col>
              <CustomCard head={"Customer's Information"}>
                <TextField
                  id={"customer-Name"}
                  label={"Customer's Name"}
                  placeholder={"Enter name"}
                  value={customerName}
                  onChangeHandler={inputHandler}
                  name={"customerName"}
                  aid={"Enter full name"}
                />
                <TextField
                  id={"Customer-Address"}
                  label={"Customer's Address"}
                  placeholder={"Enter address"}
                  value={customerAddress}
                  onChangeHandler={inputHandler}
                  name={"customerAddress"}
                  aid={"Enter full address"}
                />
              </CustomCard>
            </Col>
          </Row>

          <Row style={{ marginTop: "2em" }}>
            <Col>
              <CustomCard head={"Items purchased"}>
                <ItemsInfo itemsInfo={itemsInfo} />

                <SubmitInfo
                  itemDescription={itemDescription}
                  handler={inputHandler}
                  itemPrice={price}
                  buttonHandler={clickHandler}
                />
              </CustomCard>
            </Col>
          </Row>

          <Row style={{ marginTop: "2em" }}>
            <CustomCard head={"Total"}>
              <Col>
                <h5>${finalPrice}</h5>
              </Col>
            </CustomCard>
          </Row>

          <Row style={{ marginTop: "2em" }}>
            <Col>
              <CustomCard head={"Terms and Conditions"}>
                <TextArea
                  label={"Terms and conditions"}
                  val={terms}
                  changeHandler={inputHandler}
                  name={"terms"}
                />
              </CustomCard>
            </Col>
          </Row>

          <Row style={{ marginTop: "2em" }}>
            <Col>
              <Card>
                <Card.Body
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  {updateMode ? (
                    <>
                      <Button
                        type="submit"
                        variant="warning"
                        size="lg"
                        style={{ marginTop: "2em" }}
                      >
                        Update
                      </Button>
                      <ButtonShowInvoices />
                    </>
                  ) : (
                    <>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        style={{ marginTop: "2em" }}
                      >
                        Create Invoice
                      </Button>
                      <ButtonMainMenu />
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Form>
      <AlertWindow
        show={show}
        title={title}
        content={content}
        close={closeAlert}
      />
    </div>
  );
}

export default Layout;
