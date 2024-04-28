import { useEffect, useState } from "react";
import SingleCarft from "./SingleCarft";

const CraftContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    fetch('http://localhost:5000/craft')
    .then(res=>res.json())
    .then(d=>setData(d))
     
   
  }, []);
// console.log(data);
  return (
    <section className=" sm:py-12  max-w-6xl mx-auto   secondary-font">
      <div className="  mx-auto space-y-8">
        {/*  */}

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 items-center">
          {data?.slice(0,6).map((carft) => (
            <SingleCarft key={carft._id} carft={carft} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftContainer;
