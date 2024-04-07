import { TiArrowSortedDown } from "react-icons/ti";
import { useContext } from "react";
import { MyContext } from "../../contexts/Context";
import OrderOfice from "./OrderOfice";
import OrderOnline from "./OrderOnline";

function HowOrders2() {
  const {
    hamburgerMenu,
    ordersOnline,
    setOrdersOnline,
    ordersOfice,
    setOrdersOfice,
  } = useContext(MyContext);

  const officeHandeler = () => {
    setOrdersOfice(true);
    setOrdersOnline(false);
  };

  const orderOnlineHandeler = () => {
    setOrdersOfice(false);
    setOrdersOnline(true);
  };

  return (
    <>
      <div
        className={`${
          hamburgerMenu ? "hidden" : "block"
        } border-b-[2px] z-0 border-gray-200 relative mt-16`}
      >
        <div className="flex justify-center">
          <span className="absolute shadow-lg cursor-pointer shadow-gray-400 border-[1px] p-5 bg-[#F5F5F5] top-[-2rem] rounded-full">
            <TiArrowSortedDown size={30} />
          </span>
        </div>
        <div className="absolute text-center left-0 top-[5rem] text-[22px] right-0">
          <p>مامان‌پز چه خدماتی دارد؟</p>
        </div>
      </div>
      {/* card components */}
      <div className="mt-[12rem] flex justify-center gap-4">
        <div>
          <p
            onClick={officeHandeler}
            className={`text-center text-sm w-[130px] text-gray-600 p-1 ${
              ordersOfice && "border-b-2 cursor-pointer border-red-600"
            }`}
          >
            سفارش شرکتی
          </p>
        </div>
        <div>
          <p
            onClick={orderOnlineHandeler}
            className={`text-center text-sm w-[130px] text-gray-600 p-1 ${
              ordersOnline && "border-b-2 cursor-pointer border-red-600"
            }`}
          >
            سفارش آنلاین
          </p>
        </div>
      </div>

      {ordersOfice ? <OrderOfice /> : null}
      {ordersOnline ? <OrderOnline /> : null}
    </>
  );
}

export default HowOrders2;
