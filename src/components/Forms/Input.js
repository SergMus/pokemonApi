import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setInputList } from "../../store/lists";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [text, setText] = useState("");

  const history = useNavigate();

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const btnHandler = () => {
    dispatch(setInputList(text));
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
