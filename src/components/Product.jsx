import { useLoaderData } from "react-router-dom";
import { useState } from "react";


function AddButton({ qty, increase }) {
  if (qty === 0) {
    return (
      <button
        className="bg-white shadow-2xs/10 text-gray-900 w-2/3 h-10 mx-auto rounded-full hover:bg-gray-800 hover:text-white"
        onClick={() => {
          increase(true)
        }}
      >
        Add to cart
      </button>
    )
  } else {
    return (
      <div className="flex mx-auto gap-2 text-xl">
        <button type="button" className="bg-white text-black px-2 rounded-sm" onClick={() => {
          increase(false)
        }}>-</button>
        <div className="px-2">{qty}</div>
        <button type="button" className="bg-white text-black px-2 rounded-sm" onClick={() => {
          increase(true)
        }}>+</button>
      </div>
    )
  }
}

function Card({ product, onAdd }) {
  const ids = JSON.parse(localStorage.getItem("ids"))
  const cart = JSON.parse(localStorage.getItem("products"))
  const productInCart = cart.find((item) => item.id === product.id)
  
  const itsInCart = ids.includes(`${product.id}`)
  const defaultQty = itsInCart ? productInCart.quantity : 0;
  const [qty, setQty] = useState(defaultQty)

  function showQuantity(inc) {
    if (inc) {
      setQty(qty + 1)
      onAdd({ ...product, quantity: qty + 1 })
    } else {
      setQty(qty - 1)
      onAdd({ ...product, quantity: qty - 1 })
    }
  }

  return (
    <div className="min-w-65 h-80 flex flex-col rounded-3xl text-white bg-teal-900 shadow-2xl/10">
      <div className="flex justify-center rounded-3xl h-30 ">
        <img
          src={product.image}
          alt={product.title}
          className="size-40 aspect-square relative bottom-10 shadow-2xl/10"
        />
      </div>
      <div className="px-6 py-4 overflow-hidden">
        <h1 className="text-center uppercase font-extrabold text-2xl overflow-hidden h-8">
          {product.title}
        </h1>
        <div className="text-center text-gray-300 text-xs h-8 overflow-hidden px-4">
          <p className="text-gray-200">{product.description}</p>
        </div>
        <div className="flex justify-between mt-2 px-2">
          <p className="font-medium text-lg">Price:</p>
          <p className="text-gray-200">{product.price}$</p>
        </div>
      </div>
      <AddButton qty={qty} increase={showQuantity} />
    </div>
  )
}

export default function Product() {
  const cart = JSON.parse(localStorage.getItem("products")) || [];
  const idsLS = JSON.parse(localStorage.getItem("ids")) || [];
  const [ids, setIds] = useState(idsLS)
  const productList = useLoaderData();

  function update(product) {
    if (!idsLS.includes(`${product.id}`)) {
      // console.log('no esta en el array')
      setIds([...ids, `${product.id}`])
      localStorage.setItem("ids", JSON.stringify([...idsLS, `${product.id}`]))
      localStorage.setItem('products', JSON.stringify([...cart, product]))
    } else {
      // console.log('ya estaba en el array')
      if (product.quantity > 0) {
        const updated = cart.map((current) => {
          if (product.id === current.id) return product
          return current
        })
        localStorage.setItem('products', JSON.stringify(updated))

      } else {
        // console.log('elimino un valor')
        const updated = cart.filter((current) => current.id !== product.id)
        const idsUpdate = idsLS.filter((current) => current !== `${product.id}`)
        setIds(idsUpdate)
        localStorage.setItem("ids", JSON.stringify(idsUpdate))
        localStorage.setItem('products', JSON.stringify(updated))
      }
    }
  }

  return (
    <div className="flex overflow-auto gap-5 py-15 px-5 no-scrollbar bg-gray-900">
      {productList.map((product, index) => (
        <Card product={product} key={index} onAdd={update} />
      ))}
    </div>
  );
}
