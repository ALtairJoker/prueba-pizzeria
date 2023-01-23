import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export default function Navegacion() {
  const { total, setTotal } = useContext(context);

  const setActiveClass = ({ isActive }) => (isActive ? "activo" : "inactivo");
  return (
    <div >
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="/home" className="fs-3 text deco">
            Mamma Mia!
          </Navbar.Brand>
          <div className="d-flex justify-content-end ">
            <Nav className="me-auto">
              <NavLink to="/home" className={setActiveClass}>
                <p className="deco me-5 fs-4 text ">Home</p>
              </NavLink>
              <NavLink to="/carrito" className={setActiveClass}>
                <p className="deco fs-3 text ">
                  <i class="bx bx-cart bx-tada-hover bx-border"></i> $
                  {total.toLocaleString("De")}
                </p>
              </NavLink>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
