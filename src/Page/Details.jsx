import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const {
    image,
    sub_category,
    name,
    userName,
    rating,
    price,
    processing_time,
    short_description,
    Customization,
  } = data ?? {};

  const metaRows = [
    { label: "Price", value: price != null ? `$${price}` : "—" },
    { label: "Customization", value: Customization ?? "—" },
    { label: "Processing time", value: processing_time ?? "—" },
  ];

  return (
    <article className="border-b border-base-content/5 bg-base-100 pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/20 shadow-sm ring-1 ring-base-content/5">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="relative bg-base-200/40 lg:col-span-7">
              <div className="aspect-[4/3] w-full sm:aspect-auto sm:min-h-[22rem] lg:min-h-full lg:max-h-[min(85vh,720px)]">
                <img
                  src={image}
                  alt={name ? `${name} — artwork` : "Craft artwork"}
                  className="h-full w-full object-cover lg:max-h-[720px]"
                  loading="eager"
                />
              </div>
            </div>

            <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:justify-center">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {sub_category ? (
                  <span className="rounded-full bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary-brand)] ring-1 ring-[color:var(--color-primary-brand)]/30">
                    {sub_category}
                  </span>
                ) : null}
              </div>

              <h1 className="font-['Mochiy_Pop_One',sans-serif] text-2xl font-bold leading-tight text-base-content sm:text-3xl md:text-4xl">
                {name}
              </h1>

              <p className="mt-3 text-sm text-base-content/75">
                <span className="font-semibold text-base-content">Listed by</span>{" "}
                <span className="text-base-content/90">{userName ?? "—"}</span>
              </p>

              <dl className="mt-8 space-y-3 rounded-xl border border-base-content/10 bg-base-100/80 p-4 sm:p-5">
                {metaRows.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-base-content/5 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                      {label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-base-content">{value}</dd>
                  </div>
                ))}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-content/5 pb-3 last:border-0 last:pb-0">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-base-content/55">
                    Rating
                  </dt>
                  <dd className="inline-flex items-center gap-1.5 text-sm font-semibold tabular-nums text-[color:var(--color-primary-brand)]">
                    <FaRegStar className="text-base opacity-90" aria-hidden />
                    {rating ?? "—"}
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-base-content/55">
                  Description
                </h2>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-base-content/85 sm:text-base">
                  {short_description ?? "No description provided."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Details;
