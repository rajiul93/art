import { useLoaderData } from "react-router-dom";
import SingleCard2 from "../component/SingleCard2";

 

const AllArt = () => {
    const datas = useLoaderData()
    return (
        <div>
      <h1 className="text-center font-bold text-3xl my-8">All Art</h1>

           <div className="md:grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-14 items-start">
          {datas?.map(data=><SingleCard2 key={data._id} data={data}/>)  }
           </div>
        </div>
    );
};

export default AllArt;