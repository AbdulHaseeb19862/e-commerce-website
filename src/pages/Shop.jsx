import React, { useState } from "react";
import { categories } from "../categories";
import { dummydata } from "../dummydata";
import Products from "../components/Products";
import { FaShopify } from "react-icons/fa";

function Shop({ query, setQuery }) {
  const [cate, setCat] = useState(dummydata);
  function filterFunction(categories) {
    console.log("categories", categories);
    if (categories === "All") {
      setCat(dummydata);
    } else {
      const updateCategories = dummydata.filter(
        (item) => item.category === categories
      );
      return setCat(updateCategories);
    }
  }

  const filterData = dummydata.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  console.log(filterData);
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center mt-20">
        <h2 className="flex items-center gap-3 text-5xl font-bold mb-3">
          Shop <FaShopify />
        </h2>
      </div>
      <div className="w-full flex justify-center items-center gap-1 md:gap-10 flex-wrap">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="w-52 h-56 rounded-md hover:bg-slate-300 transition-all 3s ease-in flex flex-col gap-3 justify-center items-center mb-7 mt-10 cursor-pointer"
              onClick={() => filterFunction(item.title)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 object-cover"
              />
              <span className="block text-lg font-medium">{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center flex-wrap gap-10">
        {cate
          .filter((item) => item.name.toLowerCase().includes(query))
          .map((item) => {
            return <Products item={item} />;
          })}
      </div>
    </div>
  );
}

export default Shop;
