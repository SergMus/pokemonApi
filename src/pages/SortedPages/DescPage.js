import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Paginate from "../../components/Pagination/Paginate";
import { setSortedTypesList } from "../../store/sorts/actions";
import s from './../SortedPages/DescPage.module.scss';
import {randomColorCSS} from './../../utils';

function DescPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loaderReducer.loading);
  const { count, results } = useSelector((state) => state.sortsReducer.sorts);

  const [itemsPerPage] = useState(99);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(setSortedTypesList());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row className="d-flex align-items-baseline">
            <Col>
              <h5 className="mt-4">List of Pokemons sorted by alphabet</h5>
            </Col>
            <Col>
              <Paginate
                alwaysShown
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                itemsCount={count || 1}
                setCurrentPage={setCurrentPage}
              />
            </Col>
          </Row>
          <div className={s.wrapperList}>
            {results &&
              results
                .slice(
                  currentPage === 1
                    ? 0
                    : currentPage * itemsPerPage - itemsPerPage,
                  currentPage === 1 ? itemsPerPage : currentPage * itemsPerPage
                )
                .map((item, i) => {
                  return <div className={s.pokemonCard} key={i} style={{backgroundColor:`#${randomColorCSS()}`}}>{item.name}</div>;
                })}
          </div>
        </Container>
      )}
    </>
  );
}

export default DescPage;
