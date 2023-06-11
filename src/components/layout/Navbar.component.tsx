import {
  BiBell,
  BiHomeCircle,
  BiSearchAlt,
  BiUserCircle,
} from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="w-full border-b-2 border-gray-200">
        <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
          <div className="h-16 w-24 font-bold text-xs uppercase tracking-wide text-left md:text-center p-2 bg-white border-2 border-black rounded-2xl shadow-md">
            yummy yummy in my tummy
          </div>
          <div className="block ml-4 md:ml-40 relative max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BiSearchAlt className="text-gray-400" />
            </div>
            <input
              placeholder="Search for a recipe..."
              type="search"
              className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pl-10 pr-3 py-2"
            />
          </div>
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
              <p className="hidden md:block">User</p>
            </div>
            <div className="justify-center items-center flex flex-col relative">
              <MdLogout className="h-9 w-7" />
              <p className="hidden md:block">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
