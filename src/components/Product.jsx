/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

export default function Product() {
  const productList = useLoaderData();
  return (
    <div className="flex overflow-auto gap-5 py-15 px-5 no-scrollbar bg-gray-900">
      {productList.map((product, index) => (
        <div key={index} className="min-w-65 h-80 flex flex-col rounded-3xl text-white bg-teal-900 shadow-2xl/10">
          <div className="flex justify-center rounded-3xl h-30 ">
            <img
              src={product.image}
              alt={product.title}
              className="size-40 aspect-square relative bottom-10 shadow-2xl/10"
            />
          </div>
          <div className="p-6 overflow-hidden">
            <h1 className="text-center uppercase font-extrabold text-2xl overflow-hidden h-8">
              {product.title}
            </h1>
            <div className="text-center text-gray-300 text-xs h-8 overflow-hidden px-4">
              <p className="text-gray-200">{product.description}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-medium text-lg">Price:</p>
              <p className="text-gray-200">{product.price}</p>
            </div>
          </div>
          <button className="bg-white shadow-2xs/10 text-gray-900 w-2/3 h-10 mx-auto rounded-full hover:bg-gray-800 hover:text-white">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
