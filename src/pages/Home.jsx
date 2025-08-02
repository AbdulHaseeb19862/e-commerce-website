import { useState } from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { dummydata } from "../dummydata";

function Home() {
  const [cate, setCat] = useState(dummydata);
  return (
    <div className="mt-12">
      <Hero />
      <Categories cate={cate} setCat={setCat} dummydata={dummydata} />
      <div className="p-10 flex flex-col justify-center items-center gap-10">
        <h2 className=" text-7xl font-bold">Trending Products</h2>

        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          {cate.slice(0, 7).map((item) => {
            return <Products item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
