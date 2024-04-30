import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

 

 

const Details = () => {  
    const data = useLoaderData(); 
    const {   image,sub_category,name ,userName,rating,price,processing_time,short_description,Customization} = data;
    return (
        <section className=" mt-14">
        <ToastContainer />
   <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
     <div
       rel="noopener noreferrer"
       className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  "
       data-abc="true"
     >
       <div className="w-full    lg:col-span-7 text-center ">
         <img
           src={image}
           alt=""
           className="object-cover w-full rounded  max-h-[600px]"
         />
       </div>
       <div className="p-6  lg:col-span-5 space-y-2">
         <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
           {name}
         </h3>
          
         <hr />
         <p>
           <span className="font-bold">Author: </span>
           {userName}
         </p>
         <div className="flex items-center gap-3">
           <h1 className="font-bold">Category</h1>
           <p className="shadow-button">{sub_category}</p> 
         </div>
         <hr />
         <div className="grid grid-cols-2">
           <p>Price:</p>
           <p>${price}</p>
         </div>
         <div className="grid grid-cols-2">
           <p>Customization:</p>
           <p>{Customization}</p>
         </div>
         <div className="grid grid-cols-2">
           <p>Publisher:</p>
           <p>{userName}</p>
         </div>
         <div className="grid grid-cols-2">
           <p>Processing_ time:</p>
           <p>{processing_time}</p>
         </div>
         <div className="grid grid-cols-2">
           <p>Rating:</p>
           <p>{rating}</p>
         </div>
         <div>
         <h1 className="font-bold">Description:</h1>
 <p>{short_description}</p>
         </div>
       </div>
     </div>
   </div>
 </section>
    );
};

export default Details;