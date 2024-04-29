import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCarft from "./SingleCarft";

const CraftContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    fetch('https://new-art.vercel.app/craft')
    .then(res=>res.json())
    .then(d=>setData(d))
     
   
  }, []); 
  return (
    <section className=" sm:py-12  max-w-6xl mx-auto   secondary-font">
          <div className="text-center  max-w-2xl mx-auto ">
        <h1 className="font-bold text-4xl mb-6">Out Latest Art </h1>
    
      </div>
      <div className="  mx-auto space-y-8">
      

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 items-center">
          {data?.slice(0,6).map((carft) => (
            <SingleCarft key={carft._id} carft={carft} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">

      <Link  to={'/all-art'} className="hover:underline cursor-pointer hover:text-pink-500">Show all art </Link>
      </div>
    </section>
  );
};

export default CraftContainer;
