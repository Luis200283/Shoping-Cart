/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroHeader from "./components/HeroHeader.jsx";
import Product from "./components/Product.jsx";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json()
};

export default function App() {
  const productList = useLoaderData();

  const [ids, setIds] = useState(() => {
    const saveIds = localStorage.getItem("ids")
    return saveIds ? JSON.parse(saveIds) : [];
  });

  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("products");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
    localStorage.setItem("ids", JSON.stringify(ids));
  }, [cart, ids])

  function update(product) {
    if (!ids.includes(`${product.id}`)) {
      setIds([...ids, `${product.id}`])
      setCart([...cart, product])
    } else {
      if (product.quantity > 0) {
        const updated = cart.map((current) => {
          if (product.id === current.id) return product
          return current
        })
        setCart(updated)
      } else {
        const updated = cart.filter((current) => current.id !== product.id)
        const idsUpdate = ids.filter((current) => current !== `${product.id}`)
        setIds(idsUpdate)
        setCart(updated)
      }
    }
  }

  return (
    <div className="bg-gray-800">
      <Navbar cart={cart} update={update} />
      <HeroHeader />
      <Product productList={productList} update={update} cart={cart} ids={ids} />
    </div>
  );
};
