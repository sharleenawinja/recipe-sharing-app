import Navbar from "../../components/layout/navbar/Navbar.component";
import FollowingPosts from "../../components/layout/posts/FollowingPosts";
import NewPost from "../../components/layout/posts/NewPost";
import RecommendedPosts from "../../components/layout/posts/RecommendedPosts";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        <div className="flex flex-grow flex-row w-full mx-auto bg-gray-200 space-x-4 md:space-x-10">
          <div className="flex flex-col md:flex-row w-1/2 md:w-2/3 md:space-x-28 ml-2 md:ml-4">
            <div className="w-3/4 md:w-1/3 md:ml-7">
              <NewPost />
            </div>
            <div className="w-11/12 md:w-1/2 ">
              <FollowingPosts />
            </div>
          </div>
          <div className="w-2/5 md:w-1/4">
            <RecommendedPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
