import { BiSearchAlt, BiUserCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

const NotificationBell = () => {
  return (
    <div className="relative">
      <p
        className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
          hover:text-gray-900 focus:outline-none hover:bg-gray-100 h-11"
      >
        <span className="justify-center items-center flex">
          <span className="items-center justify-center flex">
            <svg
              className="w-6 h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                  0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                  0H9"
              />
            </svg>
          </span>
        </span>
      </p>
      <p
        className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
          absolute -top-px -right-1"
      >
        2
      </p>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="w-full border-b-2 border-gray-200">
        <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              padding: "10px",
              background: "#fff",
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            yummy yummy
            <br />
            in my tummy
          </div>
          <div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BiSearchAlt className="text-gray-400" />
            </div>
            <input
              placeholder="Search for a recipe..."
              type="search"
              className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pl-10 pr-3 py-2"
            />
          </div>
          <div className="md:space-x-10 justify-end items-center ml-auto flex space-x-3 mr-10">
            {/* clicking notification icon should take you to a page with all the notifications */}
            <NotificationBell />
            <div className="justify-center items-center flex flex-col relative">
              <BiUserCircle className="h-9 w-9 rounded-full" />
              <p>User</p>
            </div>
            <div>
              <MdLogout className="h-9 w-7" />
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
