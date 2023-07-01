import Navbar from "../../layout/navbar/Navbar.component";
import FollowingPosts from "../../layout/posts/FollowingPosts";
import NewPost from "../../layout/posts/NewPost";
import RecommendedPosts from "../../layout/posts/RecommendedPosts";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        <div className="flex flex-grow flex-row w-full mx-auto bg-gray-200 space-x-4 md:space-x-4 lg:space-x-8 xl:space-x-10">
          <div className="flex flex-col items-center block md:hidden">
            <div className="flex flex-row justify-center space-x-6">
              <div className="w-5/12">
                <NewPost />
              </div>
              <div className="w-5/12">
                <RecommendedPosts />
              </div>
            </div>
            <div className="w-11/12">
              <FollowingPosts />
            </div>
          </div>
          <div className="w-1/4 md:ml-2 hidden md:block">
            <NewPost />
          </div>
          <div className="w-2/5 border-2 hidden md:block">
            <FollowingPosts />
          </div>

          <div className="w-1/4 border-2 hidden md:block">
            <RecommendedPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
