import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const getAll = () => {
  const data = axios
    .get(`https://fakestoreapi.com/products`)
    .then((res) => res.data);
  return data;
};

export const getOne = (id: number) => {
  const data = axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data);
  return data;
};

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const data = axios
    .post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    })
    .then((res) => jwtDecode(res.data.token))
    .catch((err) => alert(err.message));
  return data;
};

export const getCart = (id: number) => {
  const data = axios
    .get(`https://fakestoreapi.com/carts/${id}`)
    .then((res) => res.data);
  return data;
};

export const getCategories = () => {
  const data = axios
    .get(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.data);
  return data;
};

export const getProductsByCategory = (category: string) => {
  const data = axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.data);
  return data;
};
