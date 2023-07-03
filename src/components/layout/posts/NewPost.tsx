import { useState } from "react";
import { storage } from "../../../../firebase.config";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
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
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const NewPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [displayArea, setDisplayArea] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authentication } = useSelector((state: any) => state);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedImage(file);
  };

  const switchDisplayArea = (area: string) => {
    if (area === "image") {
      setVideoLink("");
      setDisplayArea("image");
    } else if (area === "video") {
      setSelectedImage(null);
      setDisplayArea("video");
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      // if (selectedImage === null) return;
      setLoading(true);
      const imageRef = ref(storage, `images/${file.name + v4()}`);
      uploadBytes(imageRef, file).then(() => {
        alert("image uploaded");
      });
    } catch (error) {
      console.error("error while uploading image", error);
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = message.trim().length === 0;

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
              <div
                className={`bg-white rounded-lg shadow-md p-6 w-2/5 ${
                  selectedImage ? "h-2/3" : "h-1/2"
                } ${videoLink ? "h-5/6" : "h-1/2"}`}
              >
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
                  {authentication.profilePhoto ? (
                    <div className="h-8 w-8 overflow-hidden rounded-full mt-1">
                      <img
                        src={authentication.profilePhoto}
                        alt="Profile Photo"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <BiUserCircle className="h-9 w-9 rounded-full" />
                  )}
                  <div>
                    <p className="text-sm font-bold">
                      {authentication.user ? authentication.user : "User"}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    id="message"
                    className="block p-2.5 w-full h-36 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write your thoughts here..."
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                {displayArea === "image" && (
                  <div className="mt-4 flex flex-col">
                    <label htmlFor="file">Select an image to share</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      id="file"
                      onChange={handleImageChange}
                    />
                    {selectedImage && (
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        className="object-contain h-52 w-full mt-2"
                        alt="Selected Image"
                      />
                    )}
                  </div>
                )}
                {displayArea === "video" && (
                  <div className="mt-4 flex flex-col">
                    <label htmlFor="file">Add a video link</label>
                    <input
                      className="bg-gray-50 rounded-lg border border-gray-300 pl-2"
                      type="text"
                      placeholder="Add video link here..."
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                    {videoLink && (
                      <ReactPlayer
                        className="h-40 w-full mt-2"
                        url={videoLink}
                      />
                    )}
                  </div>
                )}
                <div className="flex flex-wrap items-center mt-4 space-x-96 space-y-2">
                  <div className="flex flex-wrap items-center space-x-3 space-y-2">
                    <button
                      className="flex items-center ml-3 mt-2"
                      onClick={() => switchDisplayArea("image")}
                    >
                      <BiImage /> <span>Photo</span>
                    </button>
                    <button
                      className="flex items-center"
                      onClick={() => switchDisplayArea("video")}
                    >
                      <BiVideo /> <span>Video</span>
                    </button>
                    <div className="flex items-center">
                      <AiOutlineComment /> <span>Anyone</span>
                    </div>
                  </div>
                  <button
                    className={`flex items-center space-x-2 bg-blue-600 rounded p-1 hover:bg-blue-800 ${
                      isButtonDisabled ? "opacity-80 cursor-not-allowed" : ""
                    }`}
                    disabled={isButtonDisabled}
                    onClick={() => handleImageUpload(selectedImage as File)}
                  >
                    <BsUpload /> <span>Post</span>
                  </button>
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
