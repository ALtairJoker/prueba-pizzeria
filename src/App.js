import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navbar";
import Home from "./views/home";
import Carrito from "./views/carrito";
import Detalle from "./views/Detalle";
import context from "react-bootstrap/esm/AccordionContext";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState([0]);
  const [nuevoCarrito, setNuevoCarrito] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await fetch("./pizzas.json");
      const data = await response.json();
      setPizzas(data);
      cambiarEstado();
    } catch (error) {
      alert(error);
    }
  };

  const cambiarEstado = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2500)
  }

  if(loading){
    return(
      <Loading/>
    )
  }

 

  return (
    <context.Provider
      value={{ pizzas, setPizzas, carrito, setCarrito, total, setTotal, nuevoCarrito, setNuevoCarrito }}
    >
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizzas/:id" element={<Detalle />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;
