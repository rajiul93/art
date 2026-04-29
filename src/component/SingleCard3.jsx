import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DELETE_URL = (id) => `https://new-art.vercel.app/delete-craft/${id}`;

const teaser = (text, max = 100) => {
  if (!text || typeof text !== "string") return "";
  const t = text.trim();
  return t.length > max ? `${t.slice(0, max).trim()}…` : t;
};

const SingleCard3 = ({ data, afterDelete, myData }) => {
  const {
    image,
    stockStatus,
    name,
    _id,
    userName,
    rating,
    price,
    Customization,
    short_description,
  } = data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this craft?",
      text: "You will not be able to undo this.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff47d0",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (!result.isConfirmed) return;

      fetch(DELETE_URL(id), { method: "DELETE" })
        .then((res) => res.json())
        .then((payload) => {
          if (payload?.deletedCount > 0) {
            const next = myData.filter((item) => item._id !== id);
            afterDelete(next);
            Swal.fire({
              title: "Removed",
              text: "The craft was deleted.",
              icon: "success",
              confirmButtonColor: "#ff47d0",
            });
          } else {
            Swal.fire({
              title: "Not deleted",
              text: "The server did not confirm deletion.",
              icon: "info",
            });
          }
        })
        .catch(() => {
          Swal.fire({
            title: "Error",
            text: "Could not delete. Try again.",
            icon: "error",
          });
        });
    });
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 shadow-md ring-1 ring-base-content/5 transition-shadow hover:shadow-lg">
      <div className="flex flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:items-stretch lg:gap-8">
        <div className="shrink-0 lg:w-[280px]">
          <div className="overflow-hidden rounded-xl bg-base-200 ring-1 ring-base-content/10">
            <img
              src={image}
              alt={name ? `${name} — preview` : "Craft preview"}
              className="aspect-[4/3] h-full w-full object-cover sm:aspect-video lg:aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          <h2 className="font-['Mochiy_Pop_One',sans-serif] text-xl font-bold leading-snug text-base-content sm:text-2xl">
            {name}
          </h2>
          <p className="text-sm leading-relaxed text-base-content/75">
            {teaser(short_description, 120) || "—"}
          </p>
          <dl className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-base-200/50 px-3 py-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                Author
              </dt>
              <dd className="font-medium text-base-content">{userName ?? "—"}</dd>
            </div>
            <div className="rounded-lg bg-base-200/50 px-3 py-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                Customization
              </dt>
              <dd className="font-medium text-base-content">{Customization ?? "—"}</dd>
            </div>
            <div className="rounded-lg bg-base-200/50 px-3 py-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                Price
              </dt>
              <dd className="font-medium tabular-nums text-base-content">
                {price != null ? `$${price}` : "—"}
              </dd>
            </div>
            <div className="rounded-lg bg-base-200/50 px-3 py-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                Stock
              </dt>
              <dd className="font-medium text-base-content">{stockStatus ?? "—"}</dd>
            </div>
            <div className="rounded-lg bg-base-200/50 px-3 py-2 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                Rating
              </dt>
              <dd className="inline-flex items-center gap-1.5 font-semibold tabular-nums text-[color:var(--color-primary-brand)]">
                <FaRegStar className="text-base opacity-90" aria-hidden />
                {rating ?? "—"}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex shrink-0 flex-col gap-3 border-t border-base-content/10 pt-4 lg:w-44 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <Link
            to={`/update/${_id}`}
            className="btn w-full border-none bg-base-200 text-base-content hover:bg-base-300"
          >
            Update
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(_id)}
            className="btn w-full border border-error/40 bg-transparent text-error hover:bg-error/10"
          >
            Delete
          </button>
          <Link
            to={`/coffee-details/${_id}`}
            className="btn w-full border-none bg-[color:var(--color-primary-brand)] text-white hover:brightness-110"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleCard3;

SingleCard3.propTypes = {
  data: PropTypes.object.isRequired,
  afterDelete: PropTypes.func.isRequired,
  myData: PropTypes.array.isRequired,
};
