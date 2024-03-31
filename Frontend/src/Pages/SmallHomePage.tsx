import Header from "../Components/Header";
import MenuPage from "../Components/Menu/MenuPage";
import Footer from "../Components/Footer"
const SmallHomePage = () => {
  return (
    <div className="w-screen h-screen container flex flex-col justify-between items-center space-y-3 ">
      <div className="w-full h-1/6 flex justify-center items-center mt-5">
        <Header />
      </div>
      <div className="w-full h-screen">
        <MenuPage />
      </div>
      <div className="w-full h-1/6 flex flex-col justify-center items-center">
        <Footer />
      </div>
    </div>
  );
};

export default SmallHomePage;
