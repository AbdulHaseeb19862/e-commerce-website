import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../feature/cartSlice";
import { toast, Bounce } from "react-toastify";

function Products({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [isInCart, setInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartItems.find((prod) => prod.id === item.id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartItems, item.id]);
  return (
    <div className="w-80 h-[530px] bg-white shadow-lg shadow-slate-400 mb-20 flex flex-col justify-between items-center p-7 rounded-3xl">
      <div className="w-full">
        <img className="w-full h-72" src={item.image} alt="" />
      </div>
      <div className="flex flex-col self-start ">
        <span className="text-gray-700 ">{item.name}</span>
        <span className="font-bold">Rs:{item.price}</span>
      </div>
      <div className="self-start flex gap-2">
        {isInCart ? (
          <button
            className="bg-red-700 hover:opacity-80 text-white  py-2 px-7 rounded-md cursor-pointer font-bold"
            onClick={() => {
              dispatch(removeToCart(item.id));
              toast.warn("Product Deleted Successfully.....", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
              });
            }}
          >
            Delete
          </button>
        ) : (
          <button
            className="bg-black hover:opacity-80 text-white py-2 px-7 rounded-md cursor-pointer font-bold"
            onClick={() => {
              dispatch(addToCart(item)); // pehle item ko cart mein daalna
              toast.success("Product Added Successfully....", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
              });
            }}
          >
            Add
          </button>
        )}

        {/* <button className="bg-red-700 hover:opacity-80 text-white  py-2 px-4 rounded-md cursor-pointer font-bold">
          Purchase
        </button> */}
      </div>
    </div>
  );
}

export default Products;
