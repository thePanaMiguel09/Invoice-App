import React from "react";
import { Form } from "react-bootstrap";

function TextField({id, label, placeholder, aid, value, onChangeHandler, name}){
    return (
        <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" placeholder={placeholder} 
        style={{border:'solid',borderWidth: '2px'}}
        value={value}
        onChange={onChangeHandler}
        name={name}
        />
        <Form.Text className="text-muted">
          {aid}
        </Form.Text>
      </Form.Group>
    );
}

export default TextField