import { Link } from "react-router-dom";

const linkClass =
  "text-sm text-neutral-content/85 transition-colors hover:text-[color:var(--color-primary-brand)] focus:outline-none focus-visible:text-[color:var(--color-primary-brand)] focus-visible:underline";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[color:var(--color-primary-brand)] bg-neutral text-neutral-content">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <aside className="max-w-sm lg:col-span-1">
            <Link to="/" className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral">
              <img
                className="w-24"
                src="https://i.ibb.co/FgtYBtM/mokeup-removebg-preview.png"
                alt="Craft Corner home"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-content/75">
              Craft Corner — share and discover handmade art and craft. Built for
              makers, collectors, and curious visitors.
            </p>
          </aside>

          <nav aria-labelledby="footer-explore-heading">
            <h2
              id="footer-explore-heading"
              className="font-['Mochiy_Pop_One',sans-serif] text-base font-bold tracking-wide text-[color:var(--color-primary-brand)]"
            >
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link to="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-art" className={linkClass}>
                  Art &amp; craft items
                </Link>
              </li>
              <li>
                <Link to="/add-craft" className={linkClass}>
                  Add craft
                </Link>
              </li>
              <li>
                <Link to="/my-art-craft" className={linkClass}>
                  My art &amp; craft
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-account-heading">
            <h2
              id="footer-account-heading"
              className="font-['Mochiy_Pop_One',sans-serif] text-base font-bold tracking-wide text-[color:var(--color-primary-brand)]"
            >
              Account
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link to="/login" className={linkClass}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/registration" className={linkClass}>
                  Registration
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-social-heading">
            <h2
              id="footer-social-heading"
              className="font-['Mochiy_Pop_One',sans-serif] text-base font-bold tracking-wide text-[color:var(--color-primary-brand)]"
            >
              Social
            </h2>
            <p className="mt-2 text-xs text-neutral-content/60">
              Replace with your real profiles when ready.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-circle btn-ghost border border-neutral-content/20 text-neutral-content hover:border-[color:var(--color-primary-brand)] hover:bg-[color:var(--color-primary-brand)]/15 hover:text-[color:var(--color-primary-brand)]"
                aria-label="Twitter / X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-circle btn-ghost border border-neutral-content/20 text-neutral-content hover:border-[color:var(--color-primary-brand)] hover:bg-[color:var(--color-primary-brand)]/15 hover:text-[color:var(--color-primary-brand)]"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-circle btn-ghost border border-neutral-content/20 text-neutral-content hover:border-[color:var(--color-primary-brand)] hover:bg-[color:var(--color-primary-brand)]/15 hover:text-[color:var(--color-primary-brand)]"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-content/15 pt-8 text-center sm:flex-row sm:text-start">
          <p className="text-sm text-neutral-content/65">
            © {year} Craft Corner. All rights reserved.
          </p>
          <p className="text-xs text-neutral-content/50">
            Made with{" "}
            <span className="text-[color:var(--color-primary-brand)]" aria-hidden>
              ♥
            </span>{" "}
            for artists everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
