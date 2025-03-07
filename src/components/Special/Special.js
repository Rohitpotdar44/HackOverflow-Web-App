import { Container } from "react-bootstrap";
import { useEffect } from "react";

import colorSharp2 from "../../assets/img/color-sharp.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Special.css";
import VideoCard from "../VideoCard";

// CDN URLs for videos
const Video1 = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/SpecialDate/20.mp4";
const Video2 = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/SpecialDate/21.mp4";
const Video3 = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/SpecialDate/22.mp4";
// import Image1 from '../../assets/img/TBA_dates(T).png';
// import Image2 from '../../assets/img/TBA_dates(B).png';
// import Image3 from '../../assets/img/TBA_dates(A).png';

export const Special = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="relative pt-12">
        {/* <img
          className="SpecialBackgroundImage"
          alt="hackathon"
          src={colorSharp2}
        ></img> */}
        <Container>
          <div className="relative p-4 lg:py-10 w-full">
            <h1
            id="green-yellow"
              className="text-center text-[45px] capitalize cursor-pointer"
              style={{
                fontFamily: "Poppins,sans-serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Dates   
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 xl:gap-64">
            <VideoCard video={Video1} weblink={"https://forms.gle/C4fr1BQKXDFo3FJa6"} />
            <VideoCard video={Video2} weblink={"https://forms.gle/C4fr1BQKXDFo3FJa6"} />
            <VideoCard video={Video3} weblink={"https://forms.gle/C4fr1BQKXDFo3FJa6"} />
            
            {/* <a href="https://ho2.tech/register" target="_blank" rel="noopener noreferrer">
              <img src={Image1} alt="Description 1" className="special-image" />
            </a>
            <a href="https://ho2.tech/register" target="_blank" rel="noopener noreferrer">
              <img src={Image2} alt="Description 2" className="special-image" />
            </a>
            <a href="https://ho2.tech/register" target="_blank" rel="noopener noreferrer">
              <img src={Image3} alt="Description 3" className="special-image" />
            </a> */}
            
          </div>
          {/* <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div> */}
        </Container>
      </section>
    </>
  );
};
