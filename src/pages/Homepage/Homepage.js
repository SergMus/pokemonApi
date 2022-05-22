import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Loader from "../../components/Loader";
import CardList from "../../components/CardList/CardList";
import { connect } from "react-redux";
import { setPokemonsList } from "../../store/lists";
import { increaseNumber, decreaseNumber } from "../../store/size";
import s from "./../Homepage/Homepage.module.scss";

function Homepage({
  lists,
  perPage,
  loading,
  increaseSize,
  decreaseSize,
  getPokemonsList,
}) {
  const loadMore = () => {
    increaseSize(perPage);
  };

  const loadLess = () => {
    if (perPage <= 21) return;
    decreaseSize(perPage);
  };

  useEffect(() => {
    getPokemonsList(perPage);
  }, [perPage, getPokemonsList]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container className={s.container}>
          <Row className={s.row}>
            <CardList pokemons={lists} />
          </Row>
          <div className="d-flex justify-content-center m-4">
            <Button
              variant="success"
              onClick={loadMore}
              style={{ marginRight: 10 }}
            >
              Show more
            </Button>
            <Button
              variant="danger"
              onClick={loadLess}
              style={{ marginLeft: 10 }}
            >
              Show less
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = ({
  listsReducer: { lists },
  sizeReducer: { perPage },
  loaderReducer: { loading },
}) => {
  return {
    lists,
    perPage,
    loading,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    increaseSize: (size) => dispatch(increaseNumber(size)),
    decreaseSize: (size) => dispatch(decreaseNumber(size)),
    getPokemonsList: (size) => dispatch(setPokemonsList(size)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(Homepage);
