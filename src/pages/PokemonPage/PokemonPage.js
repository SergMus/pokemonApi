import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Badge, ListGroup, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "./../../components/Loader";
import s from "./../PokemonPage/PokemonPage.module.scss";
import Paginate from "../../components/Pagination/Paginate";

export default function PokemonPage() {
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  let { id } = useParams();

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemonDetails(details.data);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row className={s.row}>
          <Col>
            <Card className={s.card}>
              <Card.Title className={s.title}>#{pokemonDetails.id}</Card.Title>
              <Card.Img
                src={pokemonDetails.sprites.other.dream_world.front_default}
                alt="Card image"
                style={{
                  padding: 40,
                  width: "100%",
                  maxHeight: "85%",
                  objectFit: "cover",
                }}
              />
              <Card.Title className={s.title}>{pokemonDetails.name}</Card.Title>
            </Card>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <h5>
                  Height: <Badge bg="secondary"> {pokemonDetails.height}</Badge>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <h5>
                  Weight: <Badge bg="secondary"> {pokemonDetails.weight}</Badge>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <h5>
                  Base experience:{" "}
                  <Badge bg="secondary">
                    {" "}
                    {pokemonDetails.base_experience}
                  </Badge>
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Moves count:{" "}
                  <Badge bg="secondary"> {pokemonDetails.moves.length}</Badge>
                </h5>
              </ListGroup.Item>
              <Row className="mt-3 d-flex align-items-baseline">
                <Col>
                  {pokemonDetails.moves
                    .slice(
                      currentPage === 1
                        ? 0
                        : currentPage * itemsPerPage - itemsPerPage,
                      currentPage === 1
                        ? itemsPerPage
                        : currentPage * itemsPerPage
                    )
                    .map((move, i) => {
                      return (
                        <ListGroup.Item
                          style={{ backgroundColor: "#0D6EFD", color: "white" }}
                          key={i}
                        >
                          <h5>{move.move.name}</h5>
                        </ListGroup.Item>
                      );
                    })}
                </Col>
                <Col>
                  <h2 className="fst-italic mb-5" style={{ color: "#6C757D" }}>
                    Possible moves
                  </h2>
                  <Paginate
                    alwaysShown
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    itemsCount={pokemonDetails.moves.length || 1}
                    setCurrentPage={setCurrentPage}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col style={{ maxWidth: "50%" }}>
                  <Image
                    src={
                      pokemonDetails.sprites.other.home.front_shiny ||
                      pokemonDetails.sprites.other.home.front_shiny_female
                    }
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col style={{ maxWidth: "50%" }}>
                  <Image
                    src={
                      pokemonDetails.sprites.other.home.front_default ||
                      pokemonDetails.sprites.other.home.front_female
                    }
                    style={{ width: "100%" }}
                  />
                </Col>
              </Row>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
}
