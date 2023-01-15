import React from "react";
import { useParams } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Detalle({ añadirCarrito }) {
  const { pizzas, carrito, setCarrito, total, setTotal } = useContext(context);

  const { id } = useParams();

  const pizza = pizzas.filter((pizza) => pizza.id === id);

  function añadirCarrito2(id) {
    pizzas.map((pizza) => {
      if (pizza.id == id) {
        setCarrito([...carrito, pizza]);
        setTotal(parseInt(total) + parseInt(pizza.price));
      }
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div>
        <img src={pizza[0].img} alt="" className="imgDet me-5" />
      </div>
      <div>
        <Card style={{ width: "40rem" }}>
          <Card.Body>
            <Card.Title>{pizza[0].name.toUpperCase()}</Card.Title>
            <Card.Text>{pizza[0].desc}</Card.Text>
            <Card.Title>Ingredientes</Card.Title>
            <ListGroup className="list-group-flush">
              {pizza[0].ingredients.map((ingrediente) => (
                <ListGroup.Item>{ingrediente}</ListGroup.Item>
              ))}
            </ListGroup>
            <Button
              variant="danger"
              onClick={() => añadirCarrito2(pizza[0].id)}
            >
              Añadir +
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
