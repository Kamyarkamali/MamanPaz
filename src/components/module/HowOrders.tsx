import { TiArrowSortedDown } from "react-icons/ti";
import { useContext } from "react";
import { MyContext } from "../../contexts/Context";

function HowOrders() {
  const { hamburgerMenu } = useContext(MyContext);
  return (
    <div
      className={`${
        hamburgerMenu ? "hidden" : "block"
      } border-b-[2px] z-0 border-gray-200 relative mt-7`}
    >
      <div className="flex justify-center">
        <span className="absolute shadow-lg cursor-pointer shadow-gray-400 border-[1px] p-5 bg-[#F5F5F5] top-[-2rem] rounded-full">
          <TiArrowSortedDown size={30} />
        </span>
      </div>
      <div className="absolute text-center left-0 top-[5rem] text-[22px] right-0">
        <p>چطور غذای شرکتی سفارش دهیم؟</p>
      </div>
    </div>
  );
}

export default HowOrders;
