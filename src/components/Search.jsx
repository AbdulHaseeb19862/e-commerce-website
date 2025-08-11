import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    navigate(`/search?q=${query}`);
  };
  return (
    <form
      className="hidden md:flex items-center bg-white text-gray-600 w-full max-w-[900px] h-12 rounded-3xl "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="search for items...."
        name="search"
        className="w-4/5 h-11 overflow-hidden focus:outline-hidden p-5"
      />
      <button className="w-1/5 flex justify-end pr-3 ">
        {" "}
        <CiSearch className="text-2xl cursor-pointer" />
      </button>
    </form>
  );
}

export default Search;
