import {
  BiCalendarEvent,
  BiImage,
  BiPencil,
  BiUser,
  BiVideo,
} from "react-icons/bi";
import Navbar from "../../components/layout/Navbar.component";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-grow">
        <div className="bg-indigo-300 flex-grow">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-3">
            <div className="flex items-center space-x-4">
              <BiUser className="text-gray-500 text-3xl" />
              <input
                type="text"
                placeholder="Start a post..."
                className="flex-grow border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 px-4 py-2 rounded-lg text-sm"
              />
            </div>
            <div className="flex items-center mt-4">
              <div className="flex items-center space-x-2">
                <BiImage className="text-gray-500" />
                <p className="text-sm text-gray-500">Photo</p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <BiVideo className="text-gray-500" />
                <p className="text-sm text-gray-500">Video</p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <BiCalendarEvent className="text-gray-500" />
                <p className="text-sm text-gray-500">Event</p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <BiPencil className="text-gray-500" />
                <p className="text-sm text-gray-500">Write an article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
