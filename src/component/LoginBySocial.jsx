import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
const LoginBySocial = () => {
  const { logByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const google = () => {
    logByGoogle()
      .then(( ) => { 
        Swal.fire({
          title: 'success',
          text: 'Welcome Voyage Vista',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        
      });
  };

  return (
    <div className="flex justify-center gap-8 mt-5">
      <FaGithub className="text-black text-2xl cursor-pointer  hover:text-3xl" />

      <FaGoogle
        onClick={google}
        className="text-yellow-300 text-2xl cursor-pointer hover:text-3xl "
      />

      <FaTwitter className="text-blue-600 text-2xl cursor-pointer  hover:text-3xl" />
    </div>
  );
};

export default LoginBySocial;
