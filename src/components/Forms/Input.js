import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setInputList } from "../../store/lists";


export default function Input() {
  const [text, setText] = useState("");

  const history = useNavigate();

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const btnHandler = () => {
    dispatch(setInputList(text.toLowerCase()));
    setText("");
    history("");
  };

  return (
    <Form className="d-flex me-5">
      <FormControl
        type="search"
        placeholder="Find your Pokemon"
        className="me-2"
        aria-label="Search"
        value={text}
        onChange={inputHandler}
      />
      <Button variant="outline-success" onClick={btnHandler}>
        Search
      </Button>
    </Form>
  );
}
