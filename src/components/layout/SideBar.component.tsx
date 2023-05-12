import { useState } from "react";
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
          strokeWidth="2"
        ></svg>
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

  const toggleCategories = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`h-full flex flex-col bg-white`}>
      <div className={`flex-col pt-5 flex space-y-4 md:block flex-grow`}>
        <div>
          <a
            href="#"
            className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
          >
            <span className={``}>
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                              1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span className={`hidden md:block`}>Home</span>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
          >
            <span className={``}>
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
                <path d="M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z" />
              </svg>
            </span>
            <span className={`hidden md:block`}>Upload</span>
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
            <span className={`hidden md:block`}>Favorites</span>
          </a>
        </div>
        <div>
          <button
            onClick={toggleCategories}
            className="text-sm rounded-lg text-gray-900 px-4 py-2.5 flex hover:bg-gray-200 font-medium"
          >
            <span>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3.854 2.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 3.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 7.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z"
                />
              </svg>
            </span>
            <p
              className={`px-4 font-semibold text-xs tracking-widest text-gray-900 uppercase hidden md:block`}
            >
              Categories
            </p>
          </button>
          <div
            className={`mt-4 space-y-1 md:block ${
              isVisible ? "block" : "hidden"
            }`}
          >
            {categories.map((category, index) => (
              <SingleCategory category={category} key={index} />
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
            <span className={`hidden md:block`}>Tips & Tricks</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
