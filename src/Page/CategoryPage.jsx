import { useLoaderData, useParams } from "react-router-dom";
import SingleCard2 from "../component/SingleCard2";

const CategoryPage = () => {
  const data = useLoaderData();  
  const { categoryName } = useParams();
//   if (!categoryName) {
//     return <>No data</>
//   }
  const selectedCategory = data.filter(
    (items) => items.sub_category == categoryName
  );
 
  return (
    <div className=" my-14 mt-[100px] bg-base-100 w-full h-screen">
     <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-6">
     {selectedCategory.map((data) => (
        <SingleCard2 key={data._id} data={data}></SingleCard2>
      ))}
     </div>
    </div>
  );
};

export default CategoryPage;
