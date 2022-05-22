import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import s from "./../Header.module.scss";

export default function Select() {
  const history = useNavigate();

  const selectHandle = (e)=>{
    history(`/${e.target.value}`);
  };

  return (
    <Form.Select
      aria-label="Default select example"
      style={{ maxWidth: "200px" }}
      onChange={selectHandle}
      className={s.form}
    >
      <option value="">Choose option</option>
      <option value="desc">Sort by alphabet</option>
      <option value="group">Sort by type</option>
    </Form.Select>
  );
}
