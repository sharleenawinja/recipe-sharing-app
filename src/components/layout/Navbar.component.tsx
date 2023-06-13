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
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authenticated } = useSelector((state: any) => state);

  return (
    <>
      <div className="w-full border-b-2 border-gray-200">
        <div className="bg-white h-16 items-center mx-auto px-4 flex">
          <div className="h-16 w-24 font-bold text-xs uppercase tracking-wide text-left md:text-center p-2 bg-white border-2 border-black rounded-2xl shadow-md">
            yummy yummy in my tummy
          </div>
          <div className="block ml-1 xl:ml-40 relative max-w-xs ">
            <div className="flex items-center ">
              <BiSearchAlt className="text-black lg:text-gray-400 absolute left-3 top-2.5 h-5 w-5" />
              <input
                placeholder="Search for a recipe..."
                type="search"
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pl-10 pr-3 py-2"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
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

          <div className="md:space-x-10 justify-end items-center ml-auto flex space-x-6 sm:mr-6 md:mr-10">
            <div className="justify-center items-center flex flex-col relative">
              <BiHomeCircle className="h-9 w-7" />
              <p className="hidden md:block">Home</p>
            </div>
            <div className="justify-center items-center flex flex-col relative">
              <TbFriends className="h-9 w-7" />
              <p className="hidden md:block">Allies</p>
            </div>
            <div className="justify-center items-center flex flex-col relative">
              <AiOutlineMessage className="h-9 w-7" />
              <p className="hidden md:block">Messages</p>
            </div>
            <div className="justify-center items-center flex flex-col relative">
              <BiBell className="h-9 w-7" />
              <p className="hidden md:block">Notifications</p>
            </div>
            <div className="justify-center items-center flex flex-col relative">
              <BiUserCircle className="h-9 w-9 rounded-full" />
              <p className="hidden md:block">
                {authenticated.user ? authenticated.user : "User"}
              </p>
            </div>
            <div className="justify-center items-center flex flex-col relative">
              <MdLogout className="h-9 w-7" />
              <p className="hidden lg:block">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
