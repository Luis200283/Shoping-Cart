import { useOutletContext } from "react-router-dom"
import addImg from "../assets/icons/add.svg"

function Product({ data, update }) {
    if (data) {
        return (
            <div className="p-2 my-1 flex justify-between items-center">
                <div id="info" className="flex items-center gap-4">
                    <img src={`${data.image}`} className="size-12" />
                    <div className="leading-5">
                        <h1 className="font-bold">{data.title}</h1>
                        <p className="text-gray-800 font-medium">{data.category}</p>
                        <div className="flex mx-auto gap-1 text-sm">
                            <button
                                type="button"
                                className="bg-gray-900 text-white rounded-sm w-4 h-4 flex items-center justify-center hover:text-gray-900 hover:bg-white hover:border"
                                onClick={() => {
                                    const updatedData = { ...data, quantity: data.quantity - 1 }
                                    if (data.quantity > 1) {
                                        update(updatedData)
                                    }
                                }}
                            >
                                -
                            </button>
                            <div className="px-1">{data.quantity}</div>
                            <button
                                type="button"
                                className="bg-gray-900 text-white rounded-sm w-4 h-4 flex items-center justify-center hover:text-gray-900 hover:bg-white hover:border"
                                onClick={() => {
                                    const updatedData = { ...data, quantity: data.quantity + 1 }
                                    update(updatedData)
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div
                        id="Trash"
                        className="w-10 h-10 bg-white shadow-sm/30 flex items-center justify-center rounded-sm  hover:bg-gray-100 group"
                        onClick={() => {
                            const updatedData = { ...data, quantity: 0 }
                            update(updatedData)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="red"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>
                    </div>
                    <div className="font-bold">{data.price}$</div>
                </div>
            </div>
        )
    } else {
        return <h1>Add produts to the Cart</h1>
    }

}

export default function Cart() {
    const { cart, update } = useOutletContext();
    console.log(cart)

    function renderProducts() {
        if (cart.length) {
            console.log("here")
            return cart.map((product, index) => {
                return <Product data={product} key={index} update={update} />
            })
        } else {
            return (
                <div className="flex justify-center items-center flex-col-reverse r h-full w-full ">
                    <img
                        src={`${addImg}`}
                        className="w-30  z-1"
                    />
                    <h1 className="z-2 text-xl font-extrabold text-teal-500">
                        + Add products
                    </h1>
                </div>
            )
        }
    }

    return (
        <div
            id="Cart-Modal"
            className={`bg-white w-full sm:w-100 h-110 absolute right-1 top-16 rounded-sm p-6`}
        >
            <h1 className="text-2xl font-bold border-b-2 border-gray-200 py-1">
                Shoping Cart
            </h1>

            <div
                id="Products"
                className="border-b-2 border-gray-200 py-1 h-45 overflow-auto"
            >
                {renderProducts()}
            </div>

            <div>
                <div id="Total">
                    <div className="py-4 px-2 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <h1 className="font-bold text-xl">Total</h1>
                            <p className="text-gray-600 font-light">(incl. IVA)</p>
                        </div>
                        <div className="flex px-4 font-medium text-xl">69$</div>
                    </div>
                </div>
                <div className="flex flex-col py-2 items-center gap-4">
                    <button className="bg-teal-600 hover:text-gray-100 hover:bg-teal-500 shadow-lg/20 text-white font-bold w-1/2 py-2 rounded-xl">Chackout</button>
                    <button className="text-white  hover:text-gray-100 bg-gray-800 hover:bg-gray-700 shadow-lg/20 font-bold w-1/2 py-2 rounded-xl">See in Cart</button>
                </div>
            </div>
        </div>
    )
}