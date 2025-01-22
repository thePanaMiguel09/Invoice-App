import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadAllInvoices from "./components/ReadAllInvoices.jsx";
import Layout from "./components/layout.jsx";
import MainContainer from "./components/MainContainer.jsx";
import LoadInvoiceUpdater from "./components/LoadInvoiceUpdater.jsx";
import LoadInvoice from "./components/LoadInvoice.jsx";
import HomePage from "./components/HomePage.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
          
        <Route
          path="/createinvoice"
          element={
            <MainContainer head={"Invoice Generator"}>
              {" "}
              <Layout />{" "}
            </MainContainer>
          }
        />
        <Route path="/showallinvoices" element={<ReadAllInvoices />} />

        <Route
          path="/updateinvoice/:invoiceId"
          element={<LoadInvoiceUpdater />}
        />

        <Route path="/readinvoice/:invoiceId" element={<LoadInvoice />} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    /*<ReadInvoice invoiceId={"675b12094fe9970f3e08c9a6"}/>

    /*<>
      <MainContainer head={"Invoice Generator"}/>
      <Layout updateMode invoiceId={"675b12094fe9970f3e08c9a6"} />
    </>*/

    /*<ReadAllInvoices/>*/
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
