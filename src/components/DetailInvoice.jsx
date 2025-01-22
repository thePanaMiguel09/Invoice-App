import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function DetailInvoice({id}){
    const navigate = useNavigate()

    function handleClick() {
        navigate('/readinvoice/'+id)
    }
    return (
        <Button variant="success" size="lg" onClick={handleClick}>View</Button>
    )
}


export default DetailInvoice