import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthDetails from "./AuthDetails";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setLoggedIn(true);
        navigate("/tips");
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid credentials. Please try again.");
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log(userCredentials);
        setLoggedIn(true);
        navigate("/tips");
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('src/assets/login.jpg')`,
        }}
      />
      <div className="relative flex justify-between items-center min-h-screen">
        <div className="w-1/2 p-8 text-white ml-8">
          <h1 className="text-8xl font-bold mb-8  tracking-wider">
            Yummy Yummy in My Tummy
          </h1>
          <p className="text-xl tracking-widest leading-loose mb-8 font-bold">
            At Yummy Yummy in My Tummy, we celebrate the joy of food. From
            mouthwatering delicacies to comforting home-cooked meals, we have it
            all. Join our food-loving community and discover the flavors that
            tantalize your taste buds. Get ready to embark on a delightful
            culinary journey with us!
          </p>
        </div>
        <div className="bg-black opacity-90 w-full md:w-1/3 p-8 rounded-md mr-8">
          <h2 className="text-4xl font-bold mb-8">Welcome Back!</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-white font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-white font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Log In
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Sign In with Google
          </button>
          <div className="flex items-center justify-center mt-8">
            <p className="text-gray-600">Don't have an account?</p>
            <button
              onClick={() => navigate("/signup")}
              className="ml-2 text-blue-500 underline hover:text-blue-700 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
