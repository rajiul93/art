import { Link, useLoaderData } from "react-router-dom";

const teaser = (text, max = 72) => {
  if (!text || typeof text !== "string") return "—";
  const t = text.trim();
  return t.length > max ? `${t.slice(0, max).trim()}…` : t;
};

const AllArt = () => {
  const raw = useLoaderData();
  const crafts = Array.isArray(raw) ? raw : [];

  return (
    <section className="border-b border-base-content/5 bg-base-100 pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Collection
          </p>
          <h1 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            All art &amp; craft
          </h1>
          <p className="mt-4 text-base leading-relaxed text-base-content/75">
            Scroll the table on small screens. Use <strong>Details</strong> to open
            the full page for each piece.
          </p>
          {!crafts.length && (
            <p className="mt-6 text-sm text-base-content/60" role="status">
              Nothing to show yet.
            </p>
          )}
        </header>

        {crafts.length > 0 && (
          <div className="mt-10 overflow-x-auto rounded-2xl border border-base-content/10 bg-base-100 shadow-sm ring-1 ring-base-content/5 sm:mt-12">
            <table className="table table-zebra w-full min-w-[44rem] text-left text-base-content">
              <thead>
                <tr className="border-b border-base-content/10 bg-base-200/80 text-sm uppercase tracking-wide text-base-content/70 [&>th]:font-semibold">
                  <th scope="col" className="rounded-tl-2xl">
                    Image
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col" className="hidden md:table-cell">
                    Description
                  </th>
                  <th scope="col" className="rounded-tr-2xl text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {crafts.map((item) => {
                  const {
                    _id,
                    image,
                    name,
                    sub_category,
                    short_description,
                    processing_time,
                    userName,
                  } = item;

                  return (
                    <tr
                      key={_id}
                      className="border-base-content/5 transition-colors hover:bg-base-200/40"
                    >
                      <td className="w-24 align-middle">
                        <div className="avatar">
                          <div className="mask mask-squircle h-14 w-14 ring-1 ring-base-content/10 sm:h-16 sm:w-16">
                            <img
                              src={image}
                              alt={name ? `${name} thumbnail` : "Craft thumbnail"}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="max-w-[12rem] align-middle sm:max-w-xs">
                        <span className="font-semibold text-base-content">{name}</span>
                        {userName ? (
                          <p className="mt-0.5 text-xs text-base-content/65">
                            By {userName}
                          </p>
                        ) : null}
                        {processing_time ? (
                          <span className="mt-2 inline-flex rounded-full bg-base-200 px-2 py-0.5 text-xs font-medium text-base-content/80">
                            {processing_time}
                          </span>
                        ) : null}
                      </td>
                      <td className="align-middle">
                        <span className="badge badge-outline border-base-content/20 text-xs font-normal text-base-content/90">
                          {sub_category ?? "—"}
                        </span>
                      </td>
                      <td className="hidden max-w-xs align-middle text-sm text-base-content/75 md:table-cell">
                        <span className="line-clamp-2">{teaser(short_description, 96)}</span>
                      </td>
                      <td className="align-middle text-end">
                        <Link
                          to={`/coffee-details/${_id}`}
                          className="btn btn-sm border-none bg-[color:var(--color-primary-brand)] font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllArt;
