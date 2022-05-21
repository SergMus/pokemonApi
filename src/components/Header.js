import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/pokeapi.png";
import Input from "./Forms/Input";
import Select from "./Forms/Select";

export default function Header() {

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="90"
              height="40"
              className="d-inline-block align-top"
            />
            {`   React App`}
          </Navbar.Brand>
          <Input />
          <Select />
        </Container>
      </Navbar>
    </header>
  );
}
