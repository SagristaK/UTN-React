import { Link } from "react-router-dom";

function NavBar(id) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/alta">Registro</Link>
        </li>
        <li>
          <Link to="/ingresar">Ingresar</Link>
        </li>
        <li>
          <Link to="/contador">Contador</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/producto">Producto</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
