import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCarft from "./SingleCarft";

const API = "https://new-art.vercel.app/craft";

const CraftCardSkeleton = () => (
  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 p-4 sm:p-5">
    <div className="aspect-[4/3] w-full shrink-0 rounded-xl skeleton" />
    <div className="mt-4 flex flex-1 flex-col gap-3">
      <div className="skeleton h-7 w-3/4 max-w-[280px] rounded-lg" />
      <div className="skeleton h-4 w-1/2 rounded-lg" />
      <div className="mt-auto flex justify-between gap-2 border-t border-transparent pt-4">
        <div className="skeleton h-6 w-20 rounded-full" />
        <div className="skeleton h-5 w-12 rounded-lg" />
      </div>
    </div>
  </div>
);

const CraftContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((d) => {
        if (!cancelled) setData(Array.isArray(d) ? d : []);
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setData([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const items = data.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Gallery
          </p>
          <h2 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Our latest art
          </h2>
          <p className="mt-4 text-base leading-relaxed text-base-content/75">
            A curated look at recent pieces from the community—tap a card for
            full details.
          </p>
        </header>

        {error && (
          <p
            className="mt-10 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-center text-sm text-error"
            role="alert"
          >
            We couldn&apos;t load crafts right now. Please try again later.
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {loading
            ? Array.from({ length: 6 }, (_, i) => <CraftCardSkeleton key={i} />)
            : items.map((craft) => (
                <SingleCarft key={craft._id} craft={craft} />
              ))}
        </div>

        {!loading && !error && data.length === 0 && (
          <p className="mt-10 text-center text-base-content/70">No crafts to show yet.</p>
        )}

        {!loading && !error && data.length > 0 && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              to="/all-art"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--color-primary-brand)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[color:var(--color-primary-brand)] transition hover:bg-[color:var(--color-primary-brand)] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            >
              View all art
              <span aria-hidden className="text-lg leading-none">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CraftContainer;
