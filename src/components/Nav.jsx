import React from "react";
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

function Nav() {
  return (
    <nav className="w-[100%] h-28 bg-black text-white shadow-2xl shadow-black ">
      <div className="w-[100%] h-[75%]   flex justify-between gap-5 p-5 px-10">
        <div className="flex justify-center items-center text-3xl">
          <span>V-Shop</span>
          <FaShopify />
        </div>
        <form className="hidden md:flex items-center bg-white text-gray-600 w-full max-w-[900px] h-12 rounded-3xl ">
          <input
            type="text"
            placeholder="search for items...."
            className="w-4/5 h-11 overflow-hidden focus:outline-hidden p-5"
          />
          <button className="w-1/5 flex justify-end pr-3 ">
            {" "}
            <CiSearch className="text-2xl cursor-pointer" />
          </button>
        </form>
        <div className="flex items-center justify-center relative cursor-pointer">
          <span>
            <FiShoppingCart className="text-3xl" />
          </span>{" "}
          <span className="absolute top-[-7px] left-3">0</span>
        </div>
      </div>
      <div className="w-full h-[45%] bg-gray-800 flex justify-center items-center list-none gap-10 ">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </div>
    </nav>
  );
}

export default Nav;
