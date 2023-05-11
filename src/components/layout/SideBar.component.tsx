import { useState } from "react";
import Hamburger from "./Hamburger.component";

interface SingleCategoryProps {
  category: string;
}

const SingleCategory: React.FC<SingleCategoryProps> = ({
  category,
}: SingleCategoryProps) => {
  return (
    <a
      href="#"
      className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
    >
      <span className="items-center justify-center flex">
        <svg
          className="flex-shrink-0 w-5 h-5 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                                002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0
                                012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </span>

      <span>{category}</span>
    </a>
  );
};

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const categories: string[] = [
    "Vegan",
    "Vegetarian",
    "Gluten-free",
    "General",
  ];

  const toggleSideBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`h-full flex flex-col md:bg-white ${
        isVisible ? "bg-white" : "bg-indigo-300 "
      }`}
    >
      <Hamburger toggleSideBar={toggleSideBar} />
      <div
        className={`flex-col pt-5 flex space-y-4 md:block flex-grow ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <div>
          <a
            href="#"
            className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
          >
            <span>
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                              1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span>Home</span>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
          >
            <span>
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
              </svg>
            </span>
            <span>Favorites</span>
          </a>
        </div>
        <div>
          <p className="px-4 font-semibold text-xs tracking-widest text-gray-900 uppercase">
            Categories
          </p>
          <div className="mt-4 space-y-1">
            {categories.map((category) => (
              <SingleCategory category={category} />
            ))}
          </div>
        </div>
        <div>
          <a
            href="#"
            className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
          >
            <span>
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z" />
              </svg>
            </span>
            <span>Tips & Tricks</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
