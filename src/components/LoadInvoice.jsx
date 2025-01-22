import React from "react";
import { useParams } from "react-router-dom";
import ReadInvoice from "./ReadInvoice.jsx";

function LoadInvoice() {
  const { invoiceId } = useParams();

  return <ReadInvoice invoiceId={invoiceId} />;
}

export default LoadInvoice;
