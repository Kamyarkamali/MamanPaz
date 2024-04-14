import { useParams } from "react-router-dom";
import { dataMamanProfile } from "../../data/data";
import CardProfile from "../module/CardProfile";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import CardDaynamicfoods from "../module/CardDaynamicfoods";

import bc from "../../assets/images/back.jpg";

function ProfileMaman() {
  const { id } = useParams();

  const splits = id?.split(":");
  // @ts-ignore
  const mamans = dataMamanProfile.filter((item) => item.name === splits[1]);

  return (
    <div
      style={{
        backgroundImage: `url(${`${bc}`})`,
        width: "100%",
      }}
    >
      <div className="mt-[5rem] flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="w-[343px] h-[319px] bg-white shadow-md shadow-gray-300">
          <CardProfile data={mamans} />
        </div>

        <div className="lg:w-[666px] lg:h-[309px] flex flex-col justify-center h-[220px] bg-white shadow-md shadow-gray-300">
          {mamans.map((item) => (
            <SlideshowLightbox
              key={item.id}
              className="lg:w-[600px] w-[300px] grid lg:grid-cols-3 grid-cols-2 justify-center h-[200px] gap-2 mx-auto"
            >
              <img className="w-full rounded-lg" src={item.image1} alt="/" />
              <img className="w-full rounded-lg" src={item.image2} alt="/" />
              <img className="w-full rounded-lg" src={item.image3} alt="/" />
            </SlideshowLightbox>
          ))}
        </div>
      </div>

      <CardDaynamicfoods />
    </div>
  );
}

export default ProfileMaman;
