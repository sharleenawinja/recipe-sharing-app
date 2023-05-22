import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar.componet";
import Sidebar from "../layout/SideBar.component";
import { currentItems } from "../../data/data";
import Pagination from "../layout/paginations";

interface SingleArticleProps {
  index: number;
  current: {
    heading: string;
    details: string;
    link: string;
  };
}

const SingleArticle: React.FC<SingleArticleProps> = ({
  index,
  current,
}: SingleArticleProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const renderDetails = () => {
    if (isModalOpen) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen">
          <div className="w-1/3 mx-auto bg-white p-4 rounded-lg h-2/3">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={current.link}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {current.heading}
                </h5>
              </a>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                {current.details}
              </p>
              <button
                onClick={toggleModal}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Show less
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      // Display only the first sentence
      const firstSentence = current.details.split(".")[0];
      return (
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {firstSentence}
        </p>
      );
    }
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      key={index}
    >
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={current.link}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {current.heading}
          </h5>
        </a>
        {renderDetails()}
        <button
          onClick={toggleModal}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Tips = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [newTrick, setNewTrick] = useState({
    heading: "",
    details: "",
    link: "",
  });

  const ItemsPerPage = 6;
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const itemsToShow = currentItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(currentItems.length / ItemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addedTrick = {
      heading: heading,
      details: details,
      link: photoLink,
    };
    setNewTrick(addedTrick);
    setHeading("");
    setPhotoLink("");
    setDetails("");
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    console.log(newTrick);
  }, [newTrick]);

  return (
    <>
      {isFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen">
          <div className="w-1/3 mx-auto bg-white p-4 rounded-lg h-2/3">
            <form
              className="flex flex-col space-y-4"
              onSubmit={handleSubmitForm}
            >
              <label
                htmlFor="heading"
                className="block text-sm font-medium text-gray-900"
              >
                Heading <span className="text-red-500">*</span>
              </label>
              <input
                required
                id="heading"
                placeholder="Add heading here.."
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm rounded-lg py-2 px-4"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-900"
              >
                Details <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                id="details"
                rows={4}
                placeholder="Add details here..."
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-72"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
              <label
                htmlFor="photolink"
                className="block text-sm font-medium text-gray-900"
              >
                Photo link
              </label>
              <input
                id="photolink"
                placeholder="Add photo link here.."
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm rounded-lg py-2 px-4"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setIsFormVisible(false);
                    setHeading("");
                    setDetails("");
                    setPhotoLink("");
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={`h-screen flex flex-col`}>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow bg-indigo-300 space-y-4">
            {/* clean up code, functionality for read more button (preferably use modal), functionality to add a new article/trick, verify photo link, default image to display if no photo link is provided*/}

            <div className="ml-4 mr-4 mt-4">
              <div className="w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
                  {itemsToShow.map((current, index) => (
                    <SingleArticle index={index} current={current} />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 w-2/3 mx-auto">
                  {totalPages && (
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      onPageChange={goToPage}
                    />
                  )}
                  <button
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center space-x-1"
                    onClick={() => setIsFormVisible(!isFormVisible)}
                  >
                    <span className="text-base">Add</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      className="flex-shrink-0"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
