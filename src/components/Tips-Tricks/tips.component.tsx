import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar.componet";
import Sidebar from "../layout/SideBar.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tips = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [newTrick, setNewTrick] = useState({
    heading: "",
    details: "",
    link: "",
  });

  const currentItems = [
    {
      heading: "Store spices in the right location.",
      details:
        " To prolong the life of your spices, keep them in a cool, dark place. Don't store them on top of the stove, as heat and humidity can alter their flavor.",
      link: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      heading: "Store spices in the right location.",
      details:
        " To prolong the life of your spices, keep them in a cool, dark place. Don't store them on top of the stove, as heat and humidity can alter their flavor.",
      link: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      heading: "Store spices in the right location.",
      details:
        " To prolong the life of your spices, keep them in a cool, dark place. Don't store them on top of the stove, as heat and humidity can alter their flavor.",
      link: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChangeHeading = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const handleChangeMainText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetails(e.target.value);
  };

  const handleChangePhotoLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoLink(e.target.value);
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

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    console.log(newTrick);
  }, [newTrick]);

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
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-2 mx-auto"
                onClick={toggleForm}
              >
                Add new tips/tricks
              </button>
            </div>

            {isFormVisible && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 min-h-screen">
                <div className="w-1/3 mx-auto bg-white p-4 rounded-lg">
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
                      onChange={handleChangeHeading}
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
                      className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      value={details}
                      onChange={handleChangeMainText}
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
                      onChange={handleChangePhotoLink}
                    />
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
            <div className="ml-2">
              <div className="max-w-md mx-auto">
                <Slider {...settings}>
                  {currentItems.map((current) => (
                    <div className="px-4 mt-4">
                      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                          <a
                            href="#"
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
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
