import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCalendarEvent, BiImage, BiPencil, BiVideo } from "react-icons/bi";

const NewPost = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-3">
      <div className="flex items-center space-x-4">
        <h1 className="flex items-center">
          Add a post <AiOutlineFileAdd className="ml-2" />
        </h1>
      </div>
      <div className="flex flex-wrap items-center mt-4 space-x-3 space-y-2">
        <button className="flex items-center ml-3 mt-2">
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
  );
};

export default NewPost;
