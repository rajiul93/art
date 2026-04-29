import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SingleCard3 from "../component/SingleCard3";

const CRAFT_BY_EMAIL = (email) =>
  `https://new-art.vercel.app/craft-email/${encodeURIComponent(email)}`;

const MyArtCraft = () => {
  const { user, loading } = useContext(AuthContext);
  const [ourData, setOurData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { customization: "all" },
  });

  const syncLists = (list) => {
    setOurData(list);
    setFilterData(list);
  };

  useEffect(() => {
    if (!user?.email) {
      setFetching(false);
      return;
    }
    let cancelled = false;
    setFetching(true);
    setFetchError(false);

    fetch(CRAFT_BY_EMAIL(user.email))
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((d) => {
        if (cancelled) return;
        const list = Array.isArray(d) ? d : [];
        syncLists(list);
      })
      .catch(() => {
        if (!cancelled) {
          setFetchError(true);
          syncLists([]);
        }
      })
      .finally(() => {
        if (!cancelled) setFetching(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <span className="loading loading-bars loading-lg text-[color:var(--color-primary-brand)]" />
      </div>
    );
  }

  if (!user?.email) {
    return (
      <section className="border-b border-base-content/5 bg-base-100 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-lg rounded-2xl border border-warning/30 bg-warning/10 p-8 text-center shadow-sm">
          <h1 className="font-['Mochiy_Pop_One',sans-serif] text-xl font-bold text-base-content sm:text-2xl">
            Email required on this account
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-base-content/80">
            Some sign-in methods (for example GitHub) may not expose an email to
            the app. This page loads your crafts by email, so we need one on your
            profile.
          </p>
          <ul className="mt-4 space-y-2 text-left text-sm text-base-content/75">
            <li className="flex gap-2">
              <span className="text-[color:var(--color-primary-brand)]">1.</span>
              Sign out, then sign in with Google or email &amp; password.
            </li>
            <li className="flex gap-2">
              <span className="text-[color:var(--color-primary-brand)]">2.</span>
              Or add an email to your Firebase user in the console if you control
              the backend.
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

  const onSubmit = (form) => {
    const { customization } = form;
    if (customization === "all") {
      setFilterData(ourData);
      return;
    }
    const want = String(customization).toLowerCase();
    const next = ourData.filter(
      (item) => String(item?.Customization ?? "").toLowerCase() === want
    );
    setFilterData(next);
  };

  const handleResetFilter = () => {
    reset({ customization: "all" });
    setFilterData(ourData);
  };

  return (
    <section className="border-b border-base-content/5 bg-base-100 pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="flex flex-col gap-4 border-b border-base-content/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
              Dashboard
            </p>
            <h1 className="mt-1 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
              My art &amp; craft
            </h1>
            <p className="mt-2 max-w-xl text-sm text-base-content/70">
              Pieces tied to <span className="font-medium text-base-content">{user.email}</span>.
              Filter by customization, update, or remove entries.
            </p>
          </div>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-base-content/10 bg-base-200/30 p-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6 sm:p-6"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label pt-0" htmlFor="customization-filter">
              <span className="label-text text-sm font-medium text-base-content/80">
                Customization
              </span>
            </label>
            <select
              id="customization-filter"
              className="select select-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25"
              {...register("customization")}
            >
              <option value="all">All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="btn border-none bg-[color:var(--color-primary-brand)] text-white hover:brightness-110"
            >
              Apply filter
            </button>
            <button type="button" className="btn btn-ghost" onClick={handleResetFilter}>
              Clear
            </button>
          </div>
        </form>

        {fetchError && (
          <p className="mt-8 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-center text-sm text-error" role="alert">
            Could not load your crafts. Try again later.
          </p>
        )}

        {fetching ? (
          <div className="mt-10 flex justify-center py-16">
            <span className="loading loading-dots loading-lg text-[color:var(--color-primary-brand)]" />
          </div>
        ) : filterData.length === 0 ? (
          <p className="mt-10 text-center text-base-content/65" role="status">
            No crafts found for this filter or your account yet.
          </p>
        ) : (
          <ul className="mt-10 space-y-6">
            {filterData.map((data) => (
              <li key={data._id}>
                <SingleCard3
                  afterDelete={syncLists}
                  myData={ourData}
                  data={data}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MyArtCraft;
