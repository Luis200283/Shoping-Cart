/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroHeader from "./components/HeroHeader.jsx";
import Product from "./components/Product.jsx";

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

export async function action() {
  const cart = { userId: 1, products: [{ id: 2 }] };
  const response = await fetch('https://fakestoreapi.com/carts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart)
  })
  const cartUpdated = response.json()
  return cartUpdated
};

export default function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HeroHeader />
      <Product />
    </div>
  );
};
