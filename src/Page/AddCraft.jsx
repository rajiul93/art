import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
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

    fetch("http://localhost:5000/add-craft", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((d) => console.log(d));
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-8"> Add Craft</h1>

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
              {...register("name")}
              placeholder="Title"
            />
            {errors.name && <p>Last name is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Image URL
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("image")}
              placeholder="Image URL"
            />
            {errors.image && <p>Last name is required.</p>}
          </div>
        </div>

        <div className="md:flex gap-6">
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Rating
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("rating")}
              placeholder="Title"
            />
            {errors.rating && <p>Last name is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Price
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("price")}
              placeholder="Image URL"
            />
            {errors.price && <p>Last name is required.</p>}
          </div>
        </div>

        <div className="md:flex gap-6">
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Customization
            </label>

            

            <select
              {...register("Customization")}
              className="select select-secondary w-full "
              id=""
              name=""
              defaultValue="yes"
              required
            >
              <option>Yes</option>
              <option>No</option>
            </select>

            {errors.Customization && <p>Last name is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Processing_time
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("processing_time")}
              placeholder="processing_time"
            />
            {errors.processing_time && <p>Last name is required.</p>}
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Stock Status
            </label>

            <select
              {...register("stockStatus")}
              className="select select-secondary w-full "
              id=""
              name=""
              defaultValue="In stock"
              required
            >
              <option>In stock</option>
              <option>Stock Out</option>
            </select>

            {errors.stockStatus && <p>Last name is required.</p>}
          </div>
          <div className="w-full">
            <label className="my-8 text-xl font-medium" htmlFor="">
              short description
            </label>
            <input
              className="input input-bordered w-full  mx-auto"
              {...register("short_description")}
              placeholder="short_description"
            />
            {errors.short_description && <p>Last name is required.</p>}
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="w-1/2">
            <label className="my-8 text-xl font-medium" htmlFor="">
              Ssub_category
            </label>
            <select
              {...register("sub_category")}
              className="select select-secondary w-full "
              id="customization"
              name="customization"
              defaultValue="yes"
              required
            >
              <option>Landscape Painting</option>
              <option>Portrait Drawing:</option>
              <option>Watercolour Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>

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

export default AddCraft;
