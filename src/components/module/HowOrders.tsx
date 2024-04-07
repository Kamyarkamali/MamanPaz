import { TiArrowSortedDown } from "react-icons/ti";
import { useContext } from "react";
import { MyContext } from "../../contexts/Context";
import { useLocation } from "react-router-dom";

function HowOrders() {
  const { hamburgerMenu } = useContext(MyContext);

  const location = useLocation();

  switch (location.pathname) {
    case "/cookingMamanPaz":
      "چطور با مامان‌پز همکاری کنیم؟";
      break;
    case "/":
      "چطوری غذای شرکتی سفارش بدهم؟";
      break;
    case "/services":
      "";
      break;
    default:
      location;
  }

  return (
    <div
      className={`${
        hamburgerMenu ? "hidden" : "block"
      } border-b-[2px] z-0 border-gray-200 relative mt-14`}
    >
      <div className="flex justify-center">
        <span className="absolute shadow-lg cursor-pointer shadow-gray-400 border-[1px] p-5 bg-[#F5F5F5] top-[-2rem] rounded-full">
          <TiArrowSortedDown size={30} />
        </span>
      </div>
      <div className="absolute text-center left-0 top-[5rem] text-[22px] right-0">
        <p className="text-3xl">
          {location.pathname === "/"
            ? "چطور غذای شرکتی سفارش دهیم"
            : location.pathname === "/services"
            ? ""
            : location.pathname === "/cookingMamanPaz"
            ? "چطور با مامان‌پز همکاری کنیم؟"
            : null}
        </p>
      </div>
    </div>
  );
}

export default HowOrders;
