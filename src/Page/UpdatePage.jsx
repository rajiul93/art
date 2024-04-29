import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdatePage = () => {
  const { user } = useContext(AuthContext);
  const id = useParams()



const [singleData, setSingleData] = useState({})
console.log(id.id);
useEffect(()=>{
    fetch(`https://new-dvcsziwa2-rajiul93s-projects.vercel.app/craft/${id.id}`)
    .then((res) => res.json())
    .then((d) => setSingleData(d));
},[id])
const {
    name,
    image,
    rating,
    price, 
    processing_time, 
    short_description,
    sub_category,
  } = singleData;
console.log(singleData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const {
      name,
      image,
      rating,
      price,
      Customization,
      processing_time,
      stockStatus,
      short_description,
      sub_category,
    } = data;
    const email = user.email;
    const userName = user.displayName;
    const newData = {
      email,
      userName,
      name,
      image,
      rating,
      price,
      Customization,
      processing_time,
      stockStatus,
      short_description,
      sub_category,
    };
// console.log(id);
    fetch(`https://new-dvcsziwa2-rajiul93s-projects.vercel.app/craft-update/${id.id}`,
     {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    }
)
      .then((res) => res.json())
      .then((d) => {
        if (d.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been Updated",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-8"> Update Your Product Description</h1>

      <form
        onSubmit={handleSubmit(handleForm)}
        className="max-w-4xl mx-auto space-y-3"
      >
        <div className="md:flex gap-6">
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Title
            </label>
            <input
            defaultValue={name}
              className="input input-bordered w-full  mx-auto"
              {...register("name",{ required: true })}
              placeholder="Title"
            />
            {errors.name && <p className='text-red-500'> Title is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Image URL
            </label>
            <input
            defaultValue={image}

              className="input input-bordered w-full  mx-auto"
              {...register("image",{ required: true })}
              placeholder="Image URL"
            />
            {errors.image && <p className='text-red-500'>image is required.</p>}
          </div>
        </div>

        <div className="md:flex gap-6">
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Rating
            </label>
            <input
            defaultValue={rating}

              className="input input-bordered w-full  mx-auto"
              {...register("rating",{ required: true })}
              placeholder="Title"
            />
            
            {errors.rating && <p className='text-red-500'>Title is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Price
            </label>
            <input
            defaultValue={price}

              className="input input-bordered w-full  mx-auto"
              {...register("price",{ required: true })}
              placeholder="Image URL"
            />
            {errors.price && <p className='text-red-500'>Price is required.</p>}
          </div>
        </div>

        <div className="md:flex gap-6">
        <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Customization
            </label>

            <select
              {...register("Customization",{ required: true })}
              className="select select-secondary w-full "
              id="Customization"
              name="Customization"
              defaultValue="yes"
              required
            >
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>

            {errors.Customization && <p className='text-red-500'>Customization option is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Processing_time
            </label>
            <input
            defaultValue={processing_time}

              className="input input-bordered w-full  mx-auto"
              {...register("processing_time",{ required: true })}
              placeholder="processing_time"
            />
            {errors.processing_time && <p className='text-red-500'>processing_time is required.</p>}
          </div>
        </div>
        <div className="md:flex gap-6">
        <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Stock Status
            </label>

            <select
              {...register("stockStatus",{ required: true })}
              className="select select-secondary w-full "
              id="stockStatus"
              name="stockStatus"
              defaultValue="In stock"
              required
            >
              <option>In stock</option>
              <option>Stock Out</option>
            </select>

            {errors.stockStatus && <p className='text-red-500'>Stock Status is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              short description
            </label>
            <input
            defaultValue={short_description}

              className="input input-bordered w-full  mx-auto"
              {...register("short_description",{ required: true })}
              placeholder="short_description"
            />
            {errors.short_description && <p> Short description is required.</p>}
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="w-1/2">

            <select
             {...register("sub_category",{ required: true })}
             className="select select-secondary w-full "
              id="customization"
              name="customization"
              defaultValue={sub_category}
              required
            >
              <option>Landscape Painting</option>
              <option>Portrait Drawing:</option>
              <option>Watercolour Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>

            {/* <select
              {...register("sub_category")}
              className="select select-secondary w-full "
            >
              <option disabled selected>
                Pick your favorite language
              </option>
              <option>Landscape Painting</option>
              <option>Portrait Drawing:</option>
              <option>Watercolour Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select> */}
            {errors.stockStatus && <p>Last name is required.</p>}
          </div>
        </div>

        <button type="submit" className="btn btn-active w-full btn-secondary">
          Add Craft
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
