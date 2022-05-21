import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./../CardList/CardList.module.scss";
import defaultImage from "./../../assets/default.png";
import { randomColor } from "../../utils";

function CardList({ pokemons }) {
 

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon, i) => (
          <Card
            bg={randomColor()}
            key={i}
            text={"white"}
            className={[s.card, s["m-5"]].join(" ")}
          >
            <Link to={`/pokemon/${pokemon.id}`}>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Img
                src={
                  pokemon.sprites.other.dream_world.front_default
                    ? pokemon.sprites.other.dream_world.front_default
                    : defaultImage
                }
                alt="Card image"
              />
            </Link>
          </Card>
        ))}
    </>
  );
}

export default CardList;
