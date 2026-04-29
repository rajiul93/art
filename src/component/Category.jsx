import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://new-art.vercel.app/categoryCollection";

const CategoryCardSkeleton = () => (
  <div className="flex h-full flex-col rounded-2xl border border-base-content/10 bg-base-100 p-5 sm:p-6">
    <div className="mx-auto aspect-square w-24 shrink-0 rounded-2xl skeleton sm:w-28" />
    <div className="mt-5 skeleton mx-auto h-6 w-3/4 rounded-lg" />
    <div className="mt-3 flex flex-1 flex-col gap-2">
      <div className="skeleton h-3 w-full rounded" />
      <div className="skeleton h-3 w-full rounded" />
      <div className="skeleton mx-auto h-3 w-2/3 rounded" />
    </div>
    <div className="skeleton mx-auto mt-6 h-10 w-36 rounded-full" />
  </div>
);

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((d) => {
        if (!cancelled) setCategory(Array.isArray(d) ? d : []);
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setCategory([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const teaser = (text) => {
    if (!text || typeof text !== "string") return "";
    const t = text.trim();
    return t.length > 88 ? `${t.slice(0, 88).trim()}…` : t;
  };

  return (
    <section className="border-t border-base-content/5 bg-base-200/40 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Browse
          </p>
          <h2 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Art &amp; craft categories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-base-content/75 sm:text-lg">
            Journey through diverse genres—from Impressionism to Pop Art,
            realism to surrealism—and find work that speaks to you.
          </p>
        </header>

        {error && (
          <p
            className="mt-10 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-center text-sm text-error"
            role="alert"
          >
            Categories could not be loaded. Please try again later.
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }, (_, i) => <CategoryCardSkeleton key={i} />)
            : category.map((cate) => (
                <Link
                  key={cate._id}
                  to={`/category/${encodeURIComponent(cate.category)}`}
                  className="group flex h-full flex-col rounded-2xl border border-base-content/10 bg-base-100 p-5 text-center shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary-brand)]/35 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-base-200 sm:p-6"
                >
                  <div className="mx-auto shrink-0 overflow-hidden rounded-2xl bg-base-200 ring-1 ring-base-content/5 transition group-hover:ring-[color:var(--color-primary-brand)]/25">
                    <img
                      className="aspect-square h-24 w-24 object-cover transition duration-500 group-hover:scale-105 sm:h-28 sm:w-28"
                      src={cate.image}
                      alt={cate.category ? `${cate.category} category` : "Category"}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-['Mochiy_Pop_One',sans-serif] text-lg font-bold leading-snug text-base-content sm:text-xl">
                    {cate.category}
                  </h3>
                  <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-base-content/70">
                    <span className="line-clamp-3 sm:line-clamp-4">{teaser(cate.shortDes)}</span>
                  </p>
                  <span className="mt-5 inline-flex items-center justify-center gap-1.5 self-center rounded-full border-2 border-[color:var(--color-primary-brand)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-brand)] transition group-hover:bg-[color:var(--color-primary-brand)] group-hover:text-white">
                    Explore
                    <span aria-hidden className="text-base leading-none">
                      →
                    </span>
                  </span>
                </Link>
              ))}
        </div>

        {!loading && !error && category.length === 0 && (
          <p className="mt-10 text-center text-base-content/70">No categories yet.</p>
        )}
      </div>
    </section>
  );
};

export default Category;
