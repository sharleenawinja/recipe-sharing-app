import {
  BiBell,
  BiHomeCircle,
  BiSearchAlt,
  BiUserCircle,
} from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { loggedOut } from "../../redux/authentication";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authentication } = useSelector((state: any) => state);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(loggedOut());
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="w-full border-b-2 border-gray-200">
        <div className="bg-white h-16 items-center mx-auto px-4 flex space-x-1 md:space-x-2 lg:space-x-8">
          <div className="flex-shrink-0 h-16 w-20 ml-0 md:w-30 lg:w-40 font-bold text-xs uppercase tracking-wide text-center p-2 bg-white border-2 border-black rounded-2xl shadow-md flex justify-center items-center">
            <h1>
              <span>yummy yummy</span>{" "}
              <span className="hidden lg:block">in my tummy</span>
            </h1>
          </div>

          <div className="block ml-1 xl:ml-10 relative flex-grow">
            <button
              className="flex items-center "
              onClick={() => setIsModalOpen(true)}
            >
              <BiSearchAlt className="text-black absolute left-3 top-2.5 h-5 w-5" />
              <input
                placeholder="Search..."
                type="search"
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pl-10 pr-3 py-2"
              />
            </button>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="flex space-x-4 absolute top-20 bg-white h-16 items-center mx-auto px-4 w-11/12 md:w-2/3 lg:w-1/2">
                <input
                  placeholder="Search for a recipe..."
                  type="search"
                  className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pl-10 pr-3 py-2"
                />
                <button
                  className="text-gray-600 hover:text-gray-800 mr-0"
                  onClick={() => setIsModalOpen(false)}
                >
                  Search
                </button>
                <button
                  className="text-gray-600 hover:text-gray-800 mr-0"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="md:space-x-10 justify-end items-center ml-auto flex space-x-3 sm:mr-6 md:mr-10">
            <div className="justify-center items-center flex flex-col">
              <BiHomeCircle className="h-9 w-7" />
              <p className="hidden md:block">Home</p>
            </div>
            <div className="justify-center items-center flex flex-col">
              <TbFriends className="h-9 w-7" />
              <p className="hidden md:block">Allies</p>
            </div>
            <div className="justify-center items-center flex flex-col">
              <AiOutlineMessage className="h-9 w-7" />
              <p className="hidden md:block">Messages</p>
            </div>
            <div className="justify-center items-center flex flex-col">
              <BiBell className="h-9 w-7" />
              <p className="hidden md:block">Notifications</p>
            </div>
            <div className="justify-center items-center flex flex-col">
              {authentication.profilePhoto ? (
                <div className="h-8 w-8 overflow-hidden rounded-full mt-1">
                  <img
                    src={authentication.profilePhoto}
                    alt="Profile Photo"
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <BiUserCircle className="h-9 w-9 rounded-full" />
              )}

              <p className="hidden md:block">
                {authentication.user ? authentication.user : "User"}
              </p>
            </div>
            <button
              className="justify-center items-center flex flex-col"
              onClick={handleLogOut}
            >
              <MdLogout className="h-9 w-7" />
              <p className="hidden xl:block">Log Out</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
