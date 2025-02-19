import { useState, useEffect } from "react";
import Footer from "./Footer";
import Gallery from "./galleryNew/gal";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const GalleryLayout = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {windowSize[0] < 600 && <MobileNavbar />}
      <Gallery />
      <Footer />
    </>
  );
};

export default GalleryLayout;