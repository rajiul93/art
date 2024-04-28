import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

 

 

const Details = () => {  
    const data = useLoaderData(); 
    const {   image,sub_category,name ,userName,rating,price,processing_time} = data;
    return (
        <section className="">
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
       <div className="p-6  lg:col-span-5 space-y-4">
         <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
           {name}
         </h3>
         <hr />
         <p>Fiction</p>
         <hr />
         <p>
           <span className="font-bold">Review: </span>
           {rating}
         </p>
         <div className="flex items-center gap-3">
           <h1 className="font-bold">Tag: </h1>
           <p className="shadow-button">#{sub_category}</p> 
         </div>
         <hr />
         <div className="grid grid-cols-2">
           <p>Price:</p>
           <p>${price}</p>
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
           <button
            //  onClick={() => handleClick(bookId)}
             className="btn btn-outline"
           >
             Read
           </button>
           <button 
        //    onClick={()=>handleWishList(bookId)}
            className="btn btn-active btn-accent ms-4">
             Wishlist
           </button>
         </div>
       </div>
     </div>
   </div>
 </section>
    );
};

export default Details;