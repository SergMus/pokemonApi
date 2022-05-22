import React, { useEffect } from "react";
import { Container, ListGroup, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";
import { setGroupedTypesList } from "../../store/sorts/actions";
import { randomColor } from "../../utils";

function GroupPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loaderReducer.loading);
  const groups = useSelector((state) => state.sortsReducer.groups);

  useEffect(() => {
    dispatch(setGroupedTypesList());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <h1 className="mt-4">Defending and Atack types</h1>
          <ListGroup as="ol" numbered className="mt-5">
            {groups &&
              groups.map((type, i) => {
                return (
                  <ListGroup.Item
                    action
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    key={i}
                    variant={randomColor()}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                      </div>
                      number of Pokemon types
                    </div>
                    <Badge bg="primary" pill>
                      {type.amount}
                    </Badge>
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Container>
      )}
    </>
  );
}

export default GroupPage;
