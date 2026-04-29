import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleCarft = ({ craft }) => {
  const { image, sub_category, name, userName, rating, _id, processing_time } =
    craft;

  return (
    <Link
      to={`/coffee-details/${_id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary-brand)]/35 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-base-200">
        <img
          src={image}
          alt={name ? `${name} — craft preview` : "Craft artwork"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="font-['Mochiy_Pop_One',sans-serif] line-clamp-2 text-xl font-bold leading-snug text-base-content sm:text-2xl">
          {name}
        </h3>
        <p className="text-sm text-base-content/75">
          <span className="font-semibold text-base-content">By</span>{" "}
          <span className="text-base-content/90">{userName}</span>
        </p>
        {processing_time ? (
          <p className="text-xs text-base-content/60">
            Processing: <span className="font-medium text-base-content/80">{processing_time}</span>
          </p>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-base-content/10 pt-3">
          {sub_category ? (
            <span className="max-w-[65%] truncate rounded-full bg-base-200/80 px-3 py-1 text-xs font-medium text-base-content/85 ring-1 ring-base-content/5">
              {sub_category}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold tabular-nums text-[color:var(--color-primary-brand)]">
            <FaRegStar className="text-base opacity-90" aria-hidden />
            {rating ?? "—"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleCarft;

SingleCarft.propTypes = {
  craft: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    sub_category: PropTypes.string,
    name: PropTypes.string,
    userName: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    processing_time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
