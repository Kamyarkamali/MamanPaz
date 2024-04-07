import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliders } from "../../data/data";
import { useContext } from "react";
import { MyContext } from "../../contexts/Context";

function SliderMamanPaz() {
  const { hamburgerMenu } = useContext(MyContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`${
        hamburgerMenu ? "hidden" : "block"
      } mt-[17rem] shadow-lg shadow-gray-300 p-6 lg:max-w-[700px] max-w-[400px] m-auto`}
    >
      <Slider {...settings}>
        {sliders.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col items-center">
              <img
                className="rounded-lg lg:h-[320px] lg:w-[600px]"
                src={item.image2}
                alt="/"
              />
              <img className="rounded-lg" src={item.image} alt="/" />
            </div>
            <div className="flex flex-col items-center mt-8">
              <p className="mt-5 text-red-500">{item.title}</p>
              <p className="mt-5 text-gray-500 text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderMamanPaz;
