import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://new-art.vercel.app/categoryCollection`)
      .then((res) => res.json())
      .then((d) => setCategory(d));
  }, []); 
  return (
    <div className="bg-primary-content py-14">
      <div className="text-center  max-w-2xl mx-auto ">
        <h1 className="font-bold text-4xl mb-6">Art & Craft Categories</h1>
        <p className="mb-6">
          Journey through diverse artistic genres, from expressive Impressionism
          to bold Pop Art, classical Realism to abstract Surrealism. Explore the
          rich tapestry of art history and contemporary trends, each offering
          unique perspectives and captivating imagery that inspire and provoke
          thought.
        </p>
      </div>

      <div className="grid px-2 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto  mb-14">
        {category.map((cate) => {
          return (
            <div
              key={cate._id}
              className="bg-base-100  dark:bg-gray-50 hover:shadow-2xl  px-2 py-4 flex justify-center items-center flex-col text-center"
            >
              <img className="w-28 h-28" src={cate.image} alt="" />
              <h1 className="text-xl font-semibold hover:underline cursor-pointer">
                {cate.category}
              </h1>
              <p>{cate.shortDes.slice(0, 50)}...</p>
              <Link to={`/category/${cate.category}`}>
                <button className="border shadow-xl hover:shadow-none p-2 mt-2 rounded">
                  Category All data
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
