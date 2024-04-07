import { useContext } from "react";
import { MyContext } from "../../contexts/Context";

function FaiveritFoodLine() {
  const { hamburgerMenu } = useContext(MyContext);

  return (
    <div
      className={`border-b-[2px] ${
        hamburgerMenu ? "hidden" : "block"
      } z-0 border-gray-200 relative lg:mt-[14rem] md:mt-[30rem] mt-[75rem]`}
    >
      <div className="flex justify-center">
        <span className="absolute shadow-lg w-[340px] h-[66px] text-center cursor-pointer text-red-600 shadow-gray-400 border-[1px] p-5 bg-[#F5F5F5] top-[-2rem] rounded-full">
          لحظات دوست داشتنی با طعمی از خانه
        </span>
      </div>
      <div className="absolute text-center text-center left-0 top-[5rem] text-[22px] right-0">
        <p>مشتریان مامان‌پز چه می‌گویند؟</p>
      </div>
    </div>
  );
}

export default FaiveritFoodLine;
