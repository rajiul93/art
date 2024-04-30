import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);


  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (!user.email) {
    return <div className="flex flex-col justify-center items-center max-w-2xl mx-auto h-screen align-middle">
     <div>
     <h1 className="text-xl font-bold">Maybe you login by git hub. that process didnt give email property </h1>
     <p>you should choice another option for login </p>
     <ul className="text-center">
       <li>
         you should log Out 
       </li>
       <li>
         then login by google or create user use by email and password
       </li>
     </ul>
     </div>
    </div> 
   }

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

    fetch("https://new-art.vercel.app/add-craft", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((d) => {
        if (d.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(d);
      });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-8"> Add Your Art & Craft</h1>

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
              className="input input-bordered w-full  mx-auto"
              {...register("name",{ required: true })}
              placeholder="Title"
            />
            {errors.name && <p className="text-red-500"> name is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Image URL
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("image",{ required: true })}
              placeholder="Image URL"
            />
            {errors.image && <p className="text-red-500">Image is required.</p>}
          </div>
        </div>

        <div className="md:flex gap-6">
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Rating
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("rating",{ required: true })}
              placeholder="Rating"
            />
            {errors.rating && <p className="text-red-500">rating is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Price
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("price",{ required: true })}
              placeholder="Price"
            />
            {errors.price && <p className="text-red-500">Last name is required.</p>}
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
              className="input input-bordered w-full  mx-auto"
              {...register("processing_time",{ required: true })}
              placeholder="processing_time"
            />
            {errors.processing_time && <p className='text-red-500'>Processing_time is required.</p>}
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
              className="input input-bordered w-full  mx-auto"
              {...register("short_description",{ required: true })}
              placeholder="short_description"
            />
            {errors.short_description && <p className='text-red-500'>Short description is required.</p>}
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="w-1/2">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Ssub_category
            </label>
            <select
              {...register("sub_category",{ required: true })}
              className="select select-secondary w-full "
              id="sub_category"
              name="sub_category"
              defaultValue="yes"
              required
            >
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing:">Portrait Drawing:</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>

            {errors.sub_category && <p className='text-red-500'>Sub category is required.</p>}
          </div>
        </div>

        <button type="submit" className="btn btn-active w-full mb-14 btn-secondary">
          Add Craft
        </button>
      </form>
    </div>
  );
};

export default AddCraft;
