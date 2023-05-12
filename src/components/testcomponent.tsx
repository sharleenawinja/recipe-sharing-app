import Navbar from "./layout/Navbar.componet";
import Sidebar from "./layout/SideBar.component";

const Test = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-grow">
          <Sidebar />
          <h1 className="bg-indigo-300 flex-grow">hello world</h1>
        </div>
      </div>
    </>
  );
};

export default Test;
