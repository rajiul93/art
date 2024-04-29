import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import { AuthContext } from "../Provider/AuthProvider";
import LoginBySocial from "../component/LoginBySocial";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const {loginWithEmail} =useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  const handleLogin = (data) => {
    const { email, password } = data;
    loginWithEmail(email, password)
      .then(() => {
        Swal.fire({
          title: 'success',
          text: 'Welcome Art Gallery',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      navigate(location?.state ? location.state : "/");

      })
      .catch(() => {
        toast.warn("Please check your password password");
      });
  };
  return (
    <div>
      <ToastContainer/>
      <h1 className="text-center font-bold text-3xl my-8">Login</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="max-w-2xl mx-auto space-y-3"
      >
        <input
          className="input input-bordered w-full  mx-auto"
          {...register("email", { required: true })}
          placeholder="Email"
        />{" "}
        <br />
        {errors.email && <p>Last name is required.</p>}
        <input
          className="input input-bordered w-full  mx-auto"
          {...register("password")}
          placeholder="Password"
        />{" "}
        <br />
        {errors.password && <p>Please enter number for age.</p>}
        <button type="submit" className="btn btn-active w-full btn-secondary">
          {" "}
          Login
        </button>
      </form>
      <div className="text-center mt-5">
        <p>
          You have no account go 
          <Link  to="/registration" className="text-blue-900 ms-2">
            Registration
          </Link>
        </p>
        <LoginBySocial />
      </div>
    </div>
  );
};

export default Login;
