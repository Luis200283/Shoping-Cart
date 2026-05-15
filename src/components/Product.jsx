function AddButton({ qty, increase, itsInCart }) {
  if (!itsInCart) {
    return (
      <button
        className="bg-white shadow-2xs/10 text-gray-900 w-2/3 h-10 mx-auto rounded-full hover:bg-gray-800 hover:text-white"
        onClick={() => {
          increase(true, true)
        }}
      >
        Add to cart
      </button>
    )
  } else {
    return (
      <div className="flex mx-auto gap-2 text-xl">
        <button type="button" className="bg-white text-black px-2 rounded-sm"
          onClick={() => {
            increase(false)
          }}
        >
          -
        </button>
        <div className="px-2">{qty}</div>
        <button type="button" className="bg-white text-black px-2 rounded-sm"
          onClick={() => {
            increase(true)
          }}
        >
          +
        </button>
      </div>
    )
  }
}

function Card({ product, update, cart, ids }) {
  const productInCart = cart.find((item) => item.id === product.id)
  const itsInCart = ids.includes(`${product.id}`)
  const qty = itsInCart ? productInCart.quantity : 0;

  function updateQty(inc, reset = false) {
    if (inc) {
      update({ ...product, quantity: qty + 1 })
    } else {
      update({ ...product, quantity: qty - 1 })
    }
    if (reset) {
      update({ ...product, quantity: 1 })
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
      <AddButton qty={qty} increase={updateQty} itsInCart={itsInCart} />
    </div>
  )
}

export default function Product({ productList, update, cart, ids }) {
  return (
    <div className="flex overflow-auto gap-5 py-15 px-5 no-scrollbar bg-gray-900">
      {productList.map((product, index) => (
        <Card product={product} key={index} update={update} cart={cart} ids={ids} />
      ))}
    </div>
  );
}
