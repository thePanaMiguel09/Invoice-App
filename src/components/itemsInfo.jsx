import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemsInfo ({itemsInfo}){

    const itemsInformation = itemsInfo
    let markUp = []


    itemsInformation.map((item, index)=> {
        markUp.push(
            <Row key={index}>
                <Col as={"h3"}>{item.description}</Col>
                <Col as={"h3"}>${item.price}</Col>
            </Row> 
        )
       
    })

    return (
        <Container style={{fontSize: "1.3em", fontWeight:'bold'}}>
            {markUp}
        </Container>
    )
    
}

export default ItemsInfo