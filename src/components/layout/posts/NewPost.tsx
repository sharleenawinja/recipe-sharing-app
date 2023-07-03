import { useState } from "react";
import { AiOutlineComment, AiOutlineFileAdd } from "react-icons/ai";
import {
  BiCalendarEvent,
  BiImage,
  BiPencil,
  BiUserCircle,
  BiVideo,
  BiXCircle,
} from "react-icons/bi";
import { BsUpload } from "react-icons/bs";

const NewPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-3">
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center"
            onClick={() => setIsModalOpen(true)}
          >
            Add a post <AiOutlineFileAdd className="ml-2" />
          </button>
        </div>
        <div className="flex flex-wrap items-center mt-4 space-x-3 space-y-2">
          <button
            className="flex items-center ml-3 mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            <BiImage /> <span>Photo</span>
          </button>
          <button className="flex items-center">
            <BiVideo /> <span>Video</span>
          </button>
          <button className="flex items-center">
            <BiCalendarEvent /> <span>Event</span>
          </button>
          <button className="flex items-center">
            <BiPencil /> <span>Article</span>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="w-full">
          <div className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-75">
            <div className="flex justify-center items-center h-screen w-full">
              <div className="bg-white rounded-lg shadow-md p-6 w-2/5 h-1/2">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Create a Post</h1>
                  <button
                    className="text-gray-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <BiXCircle className="text-xl" />
                  </button>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div>
                    <BiUserCircle className="text-gray-500 text-3xl" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">user</p>
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    id="message"
                    className="block p-2.5 w-full h-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div className="flex flex-wrap items-center mt-4 space-x-96 space-y-2">
                  <div className="flex flex-wrap items-center space-x-3 space-y-2">
                    <div className="flex items-center ml-3 mt-2">
                      <BiImage /> <span>Photo</span>
                    </div>
                    <div className="flex items-center">
                      <BiVideo /> <span>Video</span>
                    </div>
                    <div className="flex items-center">
                      <AiOutlineComment /> <span>Anyone</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BsUpload /> <span>Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPost;
