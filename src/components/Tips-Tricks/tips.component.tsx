import Navbar from "../layout/Navbar.componet";
import Sidebar from "../layout/SideBar.component";
import { SetStateAction, useEffect, useState } from "react";

const Tips = () => {
  const [heading, setHeading] = useState("");
  const [mainText, setMainText] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [post, setPost] = useState({ heading: "", content: "", link: "" });
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeHeading = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setHeading(e.target.value);
  };

  const handleChangeMainText = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMainText(e.target.value);
  };

  const handleChangePhotoLink = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPhotoLink(e.target.value);
  };

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newPost = {
      heading: heading,
      content: mainText,
      link: photoLink,
    };
    setPost(newPost);
    console.log(post);
    setHeading("");
    setPhotoLink("");
  };

  const handleOnClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow bg-indigo-300 space-y-4">
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto"
                onClick={handleOnClick}
              >
                Add new tips/tricks
              </button>
            </div>

            {isVisible && (
              <form
                onSubmit={handleSubmitForm}
                className="flex flex-col space-y-4 w-1/3 mx-auto"
              >
                <label
                  htmlFor="heading"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Add heading here
                </label>
                <input
                  id="heading"
                  placeholder="Heading"
                  value={heading}
                  onChange={handleChangeHeading}
                  className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm rounded-lg py-2 px-4"
                />
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add details here..."
                  onChange={handleChangeMainText}
                ></textarea>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Add photo link here
                </label>
                <input
                  placeholder="Photo Link"
                  value={photoLink}
                  onChange={handleChangePhotoLink}
                  className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm rounded-lg py-2 px-4"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            )}
            <div className="ml-2 mt-2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Store spices in the right location.
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    To prolong the life of your spices, keep them in a cool,
                    dark place. Don’t store them on top of the stove, as heat
                    and humidity can alter their flavor.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
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
