import React from "react";
import { useContext, useState, useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import Button from "react-bootstrap/Button";

export default function Carrito() {
  const { carrito, total, setTotal,nuevoCarrito, setNuevoCarrito } = useContext(context);

  const [duplicados, setDuplicados] = useState({});

  useEffect(() => {
    dupli();
  }, []);

  useEffect(() => {
    recalcularTotal();
  }, [carrito, duplicados]);

  function dupli() {
    setDuplicados(
      carrito.reduce((acc, curr) => {
        acc[curr.id] = (acc[curr.id] || 0) + 1;
        return acc;
      }, {})
    );
    setNuevoCarrito(
      carrito.filter((item, index) => carrito.indexOf(item) === index)
    );
  }
  console.log(nuevoCarrito);

  function recalcularTotal() {
    const nuevoTotal = nuevoCarrito.reduce(
      (acum, producto) => acum + producto.price * duplicados[producto.id],
      0
    );
    setTotal(nuevoTotal);
  }

  function añadir(id) {
    setDuplicados({ ...duplicados, [id]: duplicados[id] + 1 });
    recalcularTotal();
  }

  function restar(id) {
    setDuplicados({ ...duplicados, [id]: duplicados[id] - 1 });
    if (duplicados[id] === 1) {
      setNuevoCarrito((prevCarrito) =>
        prevCarrito.filter((producto) => producto.id !== id)
      );
    }
    recalcularTotal();
  }

  return (
    <div className="container mt-5">
      <h2>Detalles del pedido</h2>
      <div className="container d-grid gap-3 mt-3">
        {nuevoCarrito.map((carro) => (
          <div className="d-flex justify-content-between align-middle">
            <img src={carro.img} alt="" className="img-carrito" />
            <h3>{`${carro.name[0].toUpperCase()}${carro.name.slice(1)}`}</h3>
            <div className="justify-content-end ">
              <p>
                ${(carro.price * duplicados[carro.id]).toLocaleString("De")}
              </p>
            </div>
            <Button
              variant="danger"
              onClick={() => restar(carro.id)}
              className="btnCarrito"
            >
              -
            </Button>
            <p>{duplicados[carro.id]}</p>
            <Button
              variant="primary"
              onClick={() => añadir(carro.id)}
              className="btnCarrito"
            >
              +
            </Button>
          </div>
        ))}
        <hr className="linea2" />
        <h1>Total: ${total.toLocaleString("De")}</h1>
      </div>
    </div>
  );
}
