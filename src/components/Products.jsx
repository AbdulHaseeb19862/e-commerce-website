import React from "react";
import image1 from "../assets/image1.jpg";

function Products(item) {
  console.log("Item is ", item);
  // const { name, price, image } = item;
  // console.log("Name ", name);
  console.log("Item", item.item.image);
  return (
    <div className="w-80 h-[530px] bg-white shadow-lg shadow-slate-400 mb-20 flex flex-col justify-between items-center p-7 rounded-3xl">
      <div className="w-full">
        <img className="w-full h-72" src={item.item.image} alt="" />
      </div>
      <div className="flex flex-col self-start ">
        <span className="text-gray-700 ">{item.item.name}</span>
        <span className="font-bold">Rs:{item.item.price}</span>
      </div>
      <div className="self-start flex gap-2">
        <button className="bg-black hover:opacity-80 text-white  py-2 px-7 rounded-md cursor-pointer font-bold">
          Add
        </button>
        <button className="bg-red-700 hover:opacity-80 text-white  py-2 px-4 rounded-md cursor-pointer font-bold">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Products;
