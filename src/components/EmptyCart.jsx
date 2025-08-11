import React from "react";
import emptyCart from "../assets/emptycart.png";

function EmptyCart() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <img className="w-full max-w-96" src={emptyCart} alt="Empty Cart" />
      <p className="text-4xl font-bold">Empty Cart</p>
    </div>
  );
}

export default EmptyCart;
