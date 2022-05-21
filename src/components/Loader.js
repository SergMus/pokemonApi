import React from "react";
import { Spinner, Row, Col } from "react-bootstrap";

export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col>
          <Spinner animation="border" role="status" variant="warning">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mx-5">Pokemons are loading...</div>
        </Col>
      </Row>
    </div>
  );
}
