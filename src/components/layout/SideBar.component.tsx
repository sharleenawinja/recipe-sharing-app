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
  const categories: string[] = [
    "Vegan",
    "Vegetarian",
    "Gluten-free",
    "General",
  ];

  return (
    <div className="border-solid border-2 flex-col pt-5 flex border-indigo-600 h-full space-y-4">
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
          <span>Favorites</span>
        </a>
      </div>
      <div>
        <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
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
          <span>Tips & Tricks</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
