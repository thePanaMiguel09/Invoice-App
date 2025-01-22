import React from "react";
import MainContainer from "./MainContainer.jsx";
import Layout from "./layout.jsx";
import { useParams } from "react-router-dom";

function LoadInvoiceUpdater () {
    const {invoiceId} = useParams();

    return(
        <MainContainer head={'Invoice Generator'}>
            <Layout updateMode invoiceId={invoiceId}/>
        </MainContainer>
    )
}


export default LoadInvoiceUpdater