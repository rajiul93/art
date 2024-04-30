import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import app from "../Firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import LoginBySocial from "../component/LoginBySocial";


const Registration = () => {

  
  const auth = getAuth(app);
  const {createWithEmailPassword } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = data =>{
    const {  email, name, password,photo} = data;
    if (password.length < 6) {
        toast.warning("Password should be 6 charecter");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.warning("Must  be include  one Uppercase and one  Lowercase");
      return;
    }


    createWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Login Successfully ");
      Swal.fire({
        title: 'success',
          text: 'Welcome Voyage Vista',
          icon: 'success',
          confirmButtonText: 'OK'
      })
      navigate(location?.state ? location.state : "/");
          })
          .catch((e) => console.log(e.message));
      })
      .catch((e) => {
        console.log(e)
      });

  }
  return (
    <div >
        <ToastContainer />
      <h1 className="text-center font-bold text-3xl my-8">Registration</h1>
      <form onSubmit={handleSubmit(handleForm)} className="max-w-2xl mx-auto space-y-3">
        <input className="input input-bordered w-full  mx-auto" {...register("name",{ required: true })} placeholder="Name"/> 
        {errors.name && <p className="text-red-500">Last name is required.</p>}
        
        <br />
        <input type="email" className="input input-bordered w-full  mx-auto" {...register("email", { required: true })}  placeholder="Email"/> <br />
        {errors.email && <p className="text-red-500">email is required.</p>}
        <input className="input input-bordered w-full  mx-auto" {...register("password" )} placeholder="Password" /> <br />
        {errors.password && <p>Please enter number for age.</p>} 
        <input  className="input input-bordered w-full  mx-auto"{...register("photo" )} placeholder="Photo" /> <br />
        {errors.photo && <p>Please enter number for age.</p>} 

        <button type="submit" className="btn btn-active w-full btn-secondary"> Registration</button>
      </form>
      <div className="text-center mt-5">
        <p >You have account go  <Link to='/login' className="text-blue-900 ms-2">Log In</Link></p>
      
      <LoginBySocial />
      </div>
    </div>
  );
};

export default Registration;
