import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contador from "../Pages/Contador";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Detalle from "../Pages/Detalle";
import Producto from "../Components/Producto";

function Public() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contador" element={<Contador />}></Route>
        <Route path="/alta" element={<Registro />}></Route>
        <Route path="/ingresar" element={<Login />}></Route>
        <Route path="/producto/:id" element={<Detalle />}></Route>
        <Route path="/producto/" element={<Producto />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default Public;
