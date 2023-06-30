import Navbar from "../../components/layout/Navbar.component";
import FollowingPosts from "../../components/layout/posts/FollowingPosts";
import NewPost from "../../components/layout/posts/NewPost";
import RecommendedPosts from "../../components/layout/posts/RecommendedPosts";

const Home = () => {
  return (
    <div className="min-h-screen border-4 border-rose-600">
      <div className="flex flex-col min-h-screen">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        <div className="flex flex-grow flex-col md:flex-row w-full mx-auto bg-gray-200 space-x-16">
          <div className="w-3/4 md:w-1/4 ml-16 md:ml-7">
            <NewPost />
          </div>
          <div className="w-3/4 md:w-2/5">
            <FollowingPosts />
          </div>
          <div className="w-3/4 md:w-1/4">
            <RecommendedPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
