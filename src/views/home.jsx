import React, { useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
  const { pizzas, carrito, setCarrito, total, setTotal } = useContext(context);

  const navigate = useNavigate();

  function añadirCarrito(id) {
    pizzas.map((pizza) => {
      if (pizza.id == id) {
        setCarrito([...carrito, pizza]);
        setTotal(parseInt(total) + parseInt(pizza.price));
      }
    });
  }

  return (
    <div>
      <div className="header">
        <h1 className="shadow">¡Pizzeria Mamma Mia!</h1>
        <h3 className="shadow">
          Tenemos las mejores pizzas que puedes encontrar
        </h3>
        <hr className="linea" />
      </div>
      <div className="container">
        <div className="row row-cols-3 m-5">
          {pizzas.map((pizza) => (
            <div className="col">
              <Card
                key={pizza.id}
                style={{ width: "22rem" }}
                className="mt-5 card"
              >
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                  <Card.Title className="fs-3 text fw-bold text-center">{`${pizza.name[0].toUpperCase()}${pizza.name.slice(
                    1
                  )}`}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <h4>Ingredientes</h4>
                    <ul>
                      {pizza.ingredients.map((ingrediente) => (
                        <li className="lista">
                          <i class="bx bxs-pizza bx-spin color"></i>{" "}
                          {ingrediente}
                        </li>
                      ))}
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="text-center">
                      ${pizza.price.toLocaleString("De")}
                    </h2>
                    <Card.Body className="d-flex justify-content-center ">
                      <button
                        variant="primary"
                        onClick={() => navigate(`/pizzas/${pizza.id}`)}
                        className="me-5 cta"
                      >
                        <span>Ver mas</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </button>
                      <Button
                        variant="danger"
                        onClick={() => añadirCarrito(pizza.id)}
                      >
                        Añadir +
                      </Button>
                    </Card.Body>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
