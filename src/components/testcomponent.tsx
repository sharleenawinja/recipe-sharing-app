import Header from "./layout/Header.componet";
import Sidebar from "./layout/SideBar.component";

const Test = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <div className="flex flex-grow">
          <Sidebar />
          <h1 className="bg-blue">hello world</h1>
        </div>
      </div>
    </>
  );
};

export default Test;
