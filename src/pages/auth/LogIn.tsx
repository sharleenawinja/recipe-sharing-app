import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
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
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Log in to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
        {loggedIn && (
          <>
            <p className="mt-4 text-green-500">Logged in successfully!</p>
            <AuthDetails />
          </>
        )}
        <p className="mt-4 text-gray-600">Don't have an account?</p>
        <button
          onClick={() => navigate("/signup")}
          className="mt-2 text-blue-500 underline hover:text-blue-700 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LogIn;
