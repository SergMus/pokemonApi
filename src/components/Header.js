import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/pokeapi.png";
import Input from "./Forms/Input";
import Select from "./Forms/Select";
import s from './Header.module.scss'

export default function Header() {
  return (
    <header >
      <Navbar bg="dark" variant="dark" expand="lg">
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
          <div className={s.navbar}>
            <Input />
            <Select />
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
