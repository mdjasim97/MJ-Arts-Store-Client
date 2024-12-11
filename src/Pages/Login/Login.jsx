import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/ContextProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [successful, setSuccessful] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const { UserSignIn, SignInWithGoogle } = useContext(AuthContext);

  const handleUserSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccessful(" ");
    seterrorMessage(" ");

    UserSignIn(email, password)
      .then((result) => {
        console.log(result);
        setSuccessful("User Login Successfull.");
        Swal.fire({
          title: "Successful",
          text: "User login successful.",
          icon: "success",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        seterrorMessage(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    SignInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Successfull",
          text: "User login successfull.",
          icon: "success",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className='flex flex-col lg:justify-center lg:items-center lg:py-16 lg:bg-[url("https://i.ibb.co.com/F3Y2GH2/login-bg.jpg")] bg-no-repeat bg-cover'>
        <div className="bg-white p-4 lg:p-16 lg:rounded-2xl">
          <h1 className="text-4xl text-center lg:mx-36 mt-5 "> Login Form </h1>
          <form onSubmit={handleUserSignIn} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email : </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-base-200"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input bg-base-200 w-full"
                  required
                />
                <span className="absolute right-3 top-4">
                  {showPassword ? (
                    <FaEyeSlash onClick={handleShowPassword} />
                  ) : (
                    <FaEye onClick={handleShowPassword} />
                  )}
                </span>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-orange-400 text-white">Login</button>
            </div>
          </form>
          <p className="text-center mt-5">
            Don't have An Account ?{" "}
            <Link to="/signup" className="text-blue-600 font-bold">
              Register
            </Link>
          </p>

          {errorMessage && (
            <p className="text-red-600 font-bold text-center">{errorMessage}</p>
          )}
          {successful && (
            <p className="text-green-400 font-bold text-center">{successful}</p>
          )}

          <div className="space-y-3">
            <h1 className="text-center text-black mt-5 text-base">
              Login With
            </h1>
            <div className="flex flex-col md:flex-row  mx-auto items-center justify-center gap-2">
              <button onClick={handleGoogleSingIn} className="btn w-full md:w-auto">
                {" "}
                <FcGoogle className="text-2xl" /> Google
              </button>
              <button onClick={handleGoogleSingIn} className="btn w-full md:w-auto">
                {" "}
                <FaGithub className="text-2xl" /> GitHub
              </button>
              <button onClick={handleGoogleSingIn} className="btn w-full md:w-auto">
                {" "}
                <FaFacebook className="text-blue-600 text-2xl" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
