import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setSignedUp(true);
        navigate("/tips");
      })
      .catch((error) => {
        console.error(error);
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
          <h2 className="text-4xl text-white font-bold mb-8">
            Sign Up To Join Our Community!
          </h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
