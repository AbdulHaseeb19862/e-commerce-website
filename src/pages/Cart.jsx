import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../feature/cartSlice";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const items = useSelector((state) => state.cart);
  console.log("items", items);
  var total = items.reduce((a, b) => a + b.price, 0);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-screen pt-12 flex flex-col gap-10   pb-14 ">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        items.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full max-w-10/12 md:h-44 bg-white shadow-2xl shadow-gray-400 rounded-xl  mx-auto flex flex-col items-start md:flex md:flex-row md:justify-between md:items-center gap-5 p-5 "
            >
              <div className="flex flex-col items-start  md:flex md:flex-row md:justify-center md:items-center gap-5">
                <img className="w-full max-w-24" src={item.image} alt="" />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">{item.name}</p>
                  <span className="font-bold">Rs {item.price}/-</span>
                </div>
              </div>
              <button
                className="flex items-center gap-2 bg-red-600 px-4 py-2 text-white rounded-xl cursor-pointer hover:opacity-70"
                onClick={() => dispatch(removeToCart(item.id))}
              >
                Remove <RiDeleteBin6Line />
              </button>
            </div>
          );
        })
      )}
      <div className="w-full flex flex-col items-center gap-5">
        <div className="flex flex-col gap-4">
          <span className="text-5xl font-bold">
            Total Products : {items.length}
          </span>
          <span className="text-5xl font-bold">Total Price: {total}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
