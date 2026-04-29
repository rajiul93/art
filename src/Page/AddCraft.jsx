import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const ADD_CRAFT_URL = "https://new-art.vercel.app/add-craft";

const SUBCATEGORIES = [
  "Landscape Painting",
  "Portrait Drawing",
  "Watercolour Painting",
  "Oil Painting",
  "Charcoal Sketching",
  "Cartoon Drawing",
];

const inputClass =
  "input input-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25";

const selectClass =
  "select select-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      stockStatus: "In stock",
      sub_category: SUBCATEGORIES[0],
      Customization: "yes",
    },
  });

  if (!user?.email) {
    return (
      <section className="border-b border-base-content/5 bg-base-100 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-lg rounded-2xl border border-warning/30 bg-warning/10 p-8 text-center shadow-sm">
          <h1 className="font-['Mochiy_Pop_One',sans-serif] text-xl font-bold text-base-content sm:text-2xl">
            Email required on this account
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-base-content/80">
            Adding a craft needs your email on file. Some providers (e.g. GitHub)
            may not supply one.
          </p>
          <ul className="mt-4 space-y-2 text-left text-sm text-base-content/75">
            <li className="flex gap-2">
              <span className="text-[color:var(--color-primary-brand)]">1.</span>
              Sign out, then sign in with Google or email &amp; password.
            </li>
            <li className="flex gap-2">
              <span className="text-[color:var(--color-primary-brand)]">2.</span>
              Then return here to submit your piece.
            </li>
          </ul>
          <Link
            to="/"
            className="btn mt-6 border-none bg-[color:var(--color-primary-brand)] text-white hover:brightness-110"
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const handleForm = (data) => {
    setSubmitting(true);
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

    const newData = {
      email: user.email,
      userName: user.displayName || user.email.split("@")[0] || "Artist",
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

    fetch(ADD_CRAFT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((d) => {
        if (d?.acknowledged) {
          toast.success("Craft saved successfully.");
          reset();
          navigate("/my-art-craft");
        } else {
          toast.warning("Submitted, but the server did not confirm. Check your list.");
        }
      })
      .catch(() => {
        toast.error("Could not save. Check your connection and try again.");
      })
      .finally(() => setSubmitting(false));
  };

  const fieldError = (msg) => (
    <p className="mt-1.5 text-sm text-error" role="alert">
      {msg}
    </p>
  );

  return (
    <section className="border-b border-base-content/5 bg-base-100 pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-20">
      <ToastContainer position="top-right" closeOnClick />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Create
          </p>
          <h1 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Add your art &amp; craft
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-base-content/70">
            Fill in the details below. Your listing will appear under your account
            email.
          </p>
        </header>

        <form
          onSubmit={handleSubmit(handleForm)}
          className="mt-8 space-y-6 rounded-2xl border border-base-content/10 bg-base-200/30 p-6 shadow-sm ring-1 ring-base-content/5 sm:space-y-7 sm:p-8"
          noValidate
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-control w-full">
              <label htmlFor="add-name" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Title</span>
              </label>
              <input
                id="add-name"
                type="text"
                className={inputClass}
                placeholder="Piece title"
                {...register("name", { required: "Title is required" })}
              />
              {errors.name && fieldError(errors.name.message)}
            </div>
            <div className="form-control w-full">
              <label htmlFor="add-image" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Image URL</span>
              </label>
              <input
                id="add-image"
                type="text"
                inputMode="url"
                className={inputClass}
                placeholder="https://…"
                {...register("image", {
                  required: "Image URL is required",
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "Enter a valid URL (http/https)",
                  },
                })}
              />
              {errors.image && fieldError(errors.image.message)}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-control w-full">
              <label htmlFor="add-rating" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Rating</span>
              </label>
              <input
                id="add-rating"
                type="number"
                step="0.1"
                min={0}
                max={5}
                className={inputClass}
                placeholder="0 – 5"
                {...register("rating", {
                  required: "Rating is required",
                  min: { value: 0, message: "Min 0" },
                  max: { value: 5, message: "Max 5" },
                })}
              />
              {errors.rating && fieldError(errors.rating.message)}
            </div>
            <div className="form-control w-full">
              <label htmlFor="add-price" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Price (USD)</span>
              </label>
              <input
                id="add-price"
                type="number"
                step="0.01"
                min={0}
                className={inputClass}
                placeholder="0.00"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price must be 0 or greater" },
                })}
              />
              {errors.price && fieldError(errors.price.message)}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-control w-full">
              <label htmlFor="add-customization" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Customization</span>
              </label>
              <select
                id="add-customization"
                className={selectClass}
                {...register("Customization", { required: true })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.Customization && fieldError("Choose an option.")}
            </div>
            <div className="form-control w-full">
              <label htmlFor="add-processing" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Processing time</span>
              </label>
              <input
                id="add-processing"
                type="text"
                className={inputClass}
                placeholder="e.g. 3–5 business days"
                {...register("processing_time", { required: "Processing time is required" })}
              />
              {errors.processing_time && fieldError(errors.processing_time.message)}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-control w-full">
              <label htmlFor="add-stock" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Stock status</span>
              </label>
              <select id="add-stock" className={selectClass} {...register("stockStatus", { required: true })}>
                <option value="In stock">In stock</option>
                <option value="Stock Out">Stock out</option>
              </select>
              {errors.stockStatus && fieldError("Choose stock status.")}
            </div>
            <div className="form-control w-full md:col-span-2">
              <label htmlFor="add-short" className="label pb-1 pt-0">
                <span className="label-text font-medium text-base-content/85">Short description</span>
              </label>
              <textarea
                id="add-short"
                rows={4}
                className={`${inputClass} min-h-[6rem] resize-y py-3`}
                placeholder="Brief description for listings…"
                {...register("short_description", { required: "Short description is required" })}
              />
              {errors.short_description && fieldError(errors.short_description.message)}
            </div>
          </div>

          <div className="form-control w-full max-w-xl">
            <label htmlFor="add-subcat" className="label pb-1 pt-0">
              <span className="label-text font-medium text-base-content/85">Sub-category</span>
            </label>
            <select id="add-subcat" className={selectClass} {...register("sub_category", { required: true })}>
              {SUBCATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.sub_category && fieldError("Choose a category.")}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn mt-2 w-full border-none bg-[color:var(--color-primary-brand)] font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2 disabled:opacity-60"
          >
            {submitting ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                Saving…
              </>
            ) : (
              "Add craft"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCraft;
