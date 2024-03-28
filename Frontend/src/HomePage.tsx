import { useState, useEffect } from "react";
import LargHomePage from "./Pages/LargHomePage";
import SmallHomePage from "./Pages/SmallHomePage";
const HomePage = () => {
  const [expande, setExpande] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const widthSize = window.innerWidth;
      setExpande(widthSize >= 768);
    };
    handleResize(); //Initial check for screen width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <div className="w-full">{expande ? <LargHomePage /> : <SmallHomePage />}</div>;
};

export default HomePage;
