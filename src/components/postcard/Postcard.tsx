import {
  BiCommentDetail,
  BiLike,
  BiRepost,
  BiShareAlt,
  BiUser,
} from "react-icons/bi";

const Postcard = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <BiUser className="text-gray-500 text-3xl" />
        <div>
          <p className="text-sm font-bold">user</p>
          <p className="text-xs text-gray-500">date</p>
        </div>
      </div>
      <p className="mt-4">description</p>
      <div className="mt-4">
        <img
          src="src/assets/login.jpg"
          alt="Post"
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex items-center mt-4">
        <div className="flex items-center space-x-2">
          <BiCommentDetail className="text-gray-500" />
          <p className="text-sm text-gray-500">comments Comments</p>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <BiLike className="text-gray-500" />
          <p className="text-sm text-gray-500">likes Likes</p>
        </div>
      </div>
      <div className="flex items-center mt-4 space-x-4">
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          <BiLike className="text-white" />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          <BiCommentDetail className="text-white" />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          <BiShareAlt className="text-white" />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          <BiRepost className="text-white" />
          <span>Repost</span>
        </button>
      </div>
    </div>
  );
};

export default Postcard;
