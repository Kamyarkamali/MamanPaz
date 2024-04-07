import { sliderBank } from "../../data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SliderBank() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-[1300px] lg:block hidden m-auto mt-[3rem] border-b-2 border-t-2 p-[70px]">
      <Carousel responsive={responsive}>
        {sliderBank.map((item, index) => (
          <div key={index} className="flex items-center ">
            <img
              key={index}
              src={item.image}
              alt="/"
              className="w-[100px] h-[70px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderBank;
