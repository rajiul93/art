import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import LoginBySocial from "../component/LoginBySocial";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithEmail } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = typeof location.state === "string" ? location.state : "/";

  const handleLogin = (data) => {
    const { email, password } = data;
    loginWithEmail(email, password)
      .then(() => {
        toast.success("Welcome back!");
        navigate(from);
      })
      .catch(() => {
        toast.warn("Could not sign in. Check your email and password.");
      });
  };

  return (
    <section className="min-h-[calc(100vh-8rem)] border-b border-base-content/5 bg-base-100 px-4 py-10 sm:px-6 sm:py-14 md:py-16">
      <ToastContainer position="top-right" closeOnClick />

      <div className="mx-auto w-full max-w-md">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Welcome back
          </p>
          <h1 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Login
          </h1>
          <p className="mt-3 text-sm text-base-content/70">
            Sign in to manage your crafts and explore the gallery.
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-base-content/10 bg-base-200/30 p-6 shadow-sm ring-1 ring-base-content/5 sm:p-8">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5" noValidate>
            <div className="form-control w-full">
              <label htmlFor="login-email" className="label pb-1 pt-0">
                <span className="label-text text-sm font-medium text-base-content/80">
                  Email
                </span>
              </label>
              <input
                id="login-email"
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
              <label htmlFor="login-password" className="label pb-1 pt-0">
                <span className="label-text text-sm font-medium text-base-content/80">
                  Password
                </span>
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                className="input input-bordered w-full bg-base-100 focus:border-[color:var(--color-primary-brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary-brand)]/25"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
              />
              {errors.password && (
                <p className="mt-1.5 text-sm text-error" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn mt-2 w-full border-none bg-[color:var(--color-primary-brand)] font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-brand)] focus-visible:ring-offset-2"
            >
              Sign in
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
            Don&apos;t have an account?{" "}
            <Link
              to="/registration"
              className="font-semibold text-[color:var(--color-primary-brand)] underline-offset-2 hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
