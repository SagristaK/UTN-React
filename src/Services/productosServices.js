import instance from "../Config/axios";

export function getAllProductos() {
  // return fetch("https://api.mercadolibre.com").then((res) => res.json());

  //axios
  return instance.get("sites/MLA/search?q=all");
}

export function getByIdProductos(id) {
  return instance.get(`items/${id}`);
}
export function createProductos() {}
