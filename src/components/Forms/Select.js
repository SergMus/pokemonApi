import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Select() {
  let history = useNavigate();

  const selectHandle = (e)=>{
    history(`/${e.target.value}`)
  }

  return (
    <Form.Select
      aria-label="Default select example"
      className="mx-5"
      style={{ maxWidth: "200px" }}
      onChange={selectHandle}
    >
      <option value=''>Choose option</option>
      <option value="desc">Sort by alphabet</option>
      <option value="group">Sort by type</option>
    </Form.Select>
  );
}
