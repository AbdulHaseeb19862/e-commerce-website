import React from "react";
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dummydata } from "../dummydata";

function Nav({ query, setQuery }) {
  const data = useSelector((state) => state.cart);
  const filterData = dummydata.filter((item) =>
    item.name.toLowerCase().includes("samsung")
  );
  console.log(filterData);

  return (
    <nav className="w-[100%] h-28 bg-black text-white shadow-2xl shadow-black fixed inset-0 ">
      <div className="w-[100%] h-[75%]   flex justify-between gap-5 p-5 px-10">
        <div className="flex justify-center items-center text-3xl cursor-pointer">
          <span>V-Shop</span>
          <FaShopify />
        </div>
        <form className="hidden md:flex items-center bg-white text-gray-600 w-full max-w-[900px] h-12 rounded-3xl ">
          <input
            type="text"
            placeholder="search for items...."
            className="w-4/5 h-11 overflow-hidden focus:outline-hidden p-5"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button className="w-1/5 flex justify-end pr-3 ">
            {" "}
            <CiSearch className="text-2xl cursor-pointer" />
          </button>
        </form>

        <Link
          to={"/cart"}
          className="flex items-center justify-center relative cursor-pointer"
        >
          <span>
            <FiShoppingCart className="text-3xl" />
          </span>{" "}
          <span className="absolute top-[-7px] left-3">{data.length}</span>
        </Link>
      </div>
      <div className="w-full h-[45%] bg-gray-800 flex justify-center items-center list-none gap-10 cursor-pointer ">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/contact">
          <li>Contact </li>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
