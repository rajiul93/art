import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../Firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import LoginBySocial from "../component/LoginBySocial";

const passwordRules = {
  required: "Password is required",
  minLength: { value: 6, message: "Use at least 6 characters" },
  validate: (value) => {
    if (!value) return true;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
      return "Include at least one uppercase and one lowercase letter";
    }
    return true;
  },
};

const Registration = () => {
  const auth = getAuth(app);
  const { createWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = typeof location.state === "string" ? location.state : "/";

  const handleForm = (data) => {
    const { email, name, password, photo } = data;
    const trimmedPhoto = photo?.trim();

    createWithEmailPassword(email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
          ...(trimmedPhoto ? { photoURL: trimmedPhoto } : {}),
        })
      )
      .then(() => {
        toast.success("Account created. Welcome to Craft Corner!");
        navigate(from);
      })
      .catch((err) => {
        const code = err?.code;
        if (code === "auth/email-already-in-use") {
          toast.error("That email is already registered.");
        } else if (code === "auth/weak-password") {
          toast.error("Password is too weak. Try a stronger one.");
        } else {
          toast.error("Could not create your account. Please try again.");
        }
      });
  };

  return (
    <section className="min-h-[calc(100vh-8rem)] border-b border-base-content/5 bg-base-100 px-4 py-10 sm:px-6 sm:py-14 md:py-16">
      <ToastContainer position="top-right" closeOnClick />

      <div className="mx-auto w-full max-w-lg">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Join the community
          </p>
          <h1 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Create an account
          </h1>
          <p className="mt-3 text-sm text-base-content/70">
            Register to list crafts, save favorites, and comment on the gallery.
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-base-content/10 bg-base-200/30 p-6 shadow-sm ring-1 ring-base-content/5 sm:p-8">
          <form onSubmit={handleSubmit(handleForm)} className="space-y-5" noValidate>
            <div className="form-control w-full">
              <label htmlFor="reg-name" className="label pb-1 pt-0">
                <span className="label-text text-sm font-medium text-base-content/80">
                  Name
                </span>
              </label>
              <input
                id="reg-name"
                type="text"
                autoComplete="name"
                className="input input-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25"
                placeholder="Your display name"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                })}
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <label htmlFor="reg-email" className="label pb-1 pt-0">
                <span className="label-text text-sm font-medium text-base-content/80">
                  Email
                </span>
              </label>
              <input
                id="reg-email"
                type="email"
                autoComplete="email"
                className="input input-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <label htmlFor="reg-password" className="label pb-1 pt-0">
                <span className="label-text text-sm font-medium text-base-content/80">
                  Password
                </span>
              </label>
              <input
                id="reg-password"
                type="password"
                autoComplete="new-password"
                className="input input-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25"
                placeholder="••••••••"
                {...register("password", passwordRules)}
              />
              {errors.password && (
                <p className="mt-1.5 text-sm text-error" role="alert">
                  {errors.password.message}
                </p>
              )}
              <p className="mt-1 text-xs text-base-content/55">
                6+ characters with at least one uppercase and one lowercase letter.
              </p>
            </div>

            <div className="form-control w-full">
              <label htmlFor="reg-photo" className="label pb-1 pt-0">
                <span className="label-text text-sm font-medium text-base-content/80">
                  Photo URL <span className="font-normal text-base-content/50">(optional)</span>
                </span>
              </label>
              <input
                id="reg-photo"
                type="text"
                inputMode="url"
                autoComplete="off"
                className="input input-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25"
                placeholder="https://…"
                {...register("photo", {
                  validate: (value) => {
                    const v = value?.trim();
                    if (!v) return true;
                    return /^https?:\/\/.+/i.test(v)
                      ? true
                      : "Enter a valid URL starting with http:// or https://";
                  },
                })}
              />
              {errors.photo && (
                <p className="mt-1.5 text-sm text-error" role="alert">
                  {errors.photo.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn mt-2 w-full border-none bg-[color:var(--color-primary-brand)] font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2"
            >
              Create account
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden>
              <div className="w-full border-t border-base-content/15" />
            </div>
            <div className="relative flex justify-center text-xs font-medium uppercase tracking-wide">
              <span className="bg-base-200/30 px-3 text-base-content/50">Or continue with</span>
            </div>
          </div>

          <LoginBySocial />

          <p className="mt-8 text-center text-sm text-base-content/75">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[color:var(--color-primary-brand)] underline-offset-2 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
