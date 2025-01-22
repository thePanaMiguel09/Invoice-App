import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TextArea ({ label, val, changeHandler, name}){
  return (
    <InputGroup>
      <InputGroup.Text>{label}</InputGroup.Text>
      <Form.Control as="textarea" aria-label="With textarea" 
      style={{border:'solid',borderWidth: '2px'}}
      value={val}
      onChange={changeHandler}
      name={name}
      />
    </InputGroup>
  );
};

export default TextArea;
