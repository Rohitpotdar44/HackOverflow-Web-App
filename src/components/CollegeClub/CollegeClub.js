import React, { Suspense, useState } from "react";
// import logo from "../../assets/img/hack-overflow-logo.png";
// import fir from "../../assets/img/first.png"
// import banneriamge from "../../assets/img/hackathon.jpg";
// import image1 from "../../assets/img/college-club-events/image1.jpeg";
// import image2 from "../../assets/img/college-club-events/image2.jpeg";
// import image3 from "../../assets/img/college-club-events/image3.jpg";
// import image4 from "../../assets/img/college-club-events/image4.jpg";
// import image5 from "../../assets/img/college-club-events/image5.jpg";
// import image6 from "../../assets/img/college-club-events/image6.jpg";
// import image7 from "../../assets/img/college-club-events/image7.jpg";
// import image8 from "../../assets/img/college-club-events/image8.jpg";
// import image9 from "../../assets/img/college-club-events/image9.jpg";
// import image10 from "../../assets/img/college-club-events/image10.jpg";
// import image11 from "../../assets/img/college-club-events/image11.jpg";
// import image12 from "../../assets/img/college-club-events/image12.jpg";
// import image13 from "../../assets/img/college-club-events/image13.jpg";
// import image14 from "../../assets/img/college-club-events/image14.png";
// import image15 from "../../assets/img/college-club-events/image15.png";
// import image16 from "../../assets/img/college-club-events/image16.png";
// import image17 from "../../assets/img/college-club-events/image17.JPG";
// import image18 from "../../assets/img/college-club-events/image18.JPG";
// import image19 from "../../assets/img/college-club-events/image19.jpg";
// import image20 from "../../assets/img/college-club-events/image20.jpeg";
// import image21 from "../../assets/img/college-club-events/image21.JPG";

// NEW IMAGES IMPORT
import image1 from "../../assets/img/Events/college-club-events-23/image1.webp";
import image2 from "../../assets/img/Events/college-club-events-23/image2.webp";
import image3 from "../../assets/img/Events/college-club-events-23/image3.webp";
import image4 from "../../assets/img/Events/college-club-events-23/image4.webp";
import image5 from "../../assets/img/Events/college-club-events-23/image5.webp";
import image6 from "../../assets/img/Events/college-club-events-23/image6.webp";
import image7 from "../../assets/img/Events/college-club-events-23/image7.webp";
import "./CollegeClub.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import OptimizedImage from '../common/OptimizedImage';

const CollegeClub = () => {
  const [imageError, setImageError] = useState(false);

  // CDN URLs for images - Updated with correct path structure
  const images = [
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image1.webp",
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image2.webp",
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image3.webp",
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image4.webp",
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image5.webp",
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image6.webp",
    "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/CourselGallery/image7.webp"
  ];

  // Error handling for images
  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src);
    setImageError(true);
  };

  // Preload images with error handling
  React.useEffect(() => {
    images.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onerror = () => {
        console.error("Failed to preload image:", url);
        setImageError(true);
      };
    });
  }, []);

  if (imageError) {
    console.log("Loading fallback content due to image errors");
  }

  return (
    <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
      <section className="top pb-6">
        <div className="relative topContainer flex flex-col justify-center items-center">
          {/* <div class="absolute h-[4px] bg-[#7b1072] w-24" /> */}
          <h1
             id="green-yellow"
            className="pt-2 text-[30px] sm:text-[36px] md:text-[35px] lg:text-[45px]"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Glimpses of Hackoverflow 2.0
          </h1>
          <div className="Description mt-4 md:mt-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Carousel
                interval={2000}
                className="border-white d-block h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
              >
                {images.map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <OptimizedImage
                      src={imageUrl}
                      alt={`Hackoverflow 2.0 Glimpse ${index + 1}`}
                      className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
                      priority={index < 3}
                      fetchpriority={index < 3 ? "high" : "low"}
                      onError={handleImageError}
                      style={{ objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <div className="navbar-text flex justify-center">
        <Link to="/gallery">
          <button className="SeeMoreButton bg-[#365048] hover:bg-[#5B8F81] text-white font-bold py-2 px-4 rounded">
            See More...
          </button>
        </Link>
      </div>

      {/* <div class="bg-cover bg-center h-screen w-full md:h-64 md:w-auto" style={{ backgroundImage: `url(${banneriamge})` }}>
                <div class="container mx-auto h-full md:h-64">
                    <ImageSlider effectDelay={500} autoPlayDelay={1000}>
                        <Slide>
                            <img alt="img1" class="w-full h-64 object-cover" src={logo} />
                        </Slide>
                        <Slide>
                            <img alt="img2" class="w-full h-64 object-cover" src={fir} />
                        </Slide>
                        <Slide>
                            <img alt="img3" class="w-full h-64 object-cover" src={logo} />
                        </Slide>
                    </ImageSlider>
                </div>
            </div> */}
    </Suspense>
  );
};

export default CollegeClub;
