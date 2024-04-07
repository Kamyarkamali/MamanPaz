import { useContext } from "react";
import image from "../../assets/images/services.jpg";
import { MyContext } from "../../contexts/Context";
import HowOrders from "./HowOrders";
import CardOrders from "./CardOrders";
import { useLocation } from "react-router-dom";
import Souporter from "./Souporter";
import Programmer from "./Programmer";

function Services() {
  const { hamburgerMenu } = useContext(MyContext);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="mt-[9rem] flex justify-between max-w-[1580px] m-auto">
        <div className="lg:mr-[7rem] flex justify-center w-full lg:justify-start lg:w-0">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center mb-[3rem]">سفارش غذای شرکتی</h1>
            <form
              className={`bg-[#EBEBEB] ${
                hamburgerMenu ? "hidden" : "block"
              } z-10 flex rounded-lg flex-col items-start p-5 w-[340px] h-[540px]`}
            >
              <label className="text-[13px] mt-2 text-gray-500">نام</label>
              <input
                placeholder="نام"
                type="text"
                className="border-[1px] mt-4 w-[300px] outline-none p-3 rounded-lg border-gray-500"
              />
              <label className="text-[13px] mt-2 text-gray-500">
                شماره موبایل
              </label>
              <input
                placeholder="شماره موبایل"
                type="text"
                className="border-[1px] mt-4 w-[300px] outline-none p-3 rounded-lg border-gray-500"
              />
              <label className="text-[13px] mt-2 text-gray-500">
                شماره تلفن
              </label>
              <input
                placeholder="شماره تلفن"
                type="text"
                className="border-[1px] mt-4 w-[300px] outline-none p-3 rounded-lg border-gray-500"
              />
              <label className="text-[13px] mt-2 text-gray-500">تام شرکت</label>
              <input
                placeholder="نام شرکت"
                type="text"
                className="border-[1px] mt-4 w-[300px] outline-none p-3 rounded-lg border-gray-500"
              />
              <input
                placeholder="تعداد پرسنل"
                type="text"
                className="border-[1px] mt-4 w-[300px] outline-none p-3 rounded-lg border-gray-500"
              />
              <div className="flex justify-center mt-3">
                <button className="bg-[#DFDFDF] w-[300px] rounded-lg text-gray-500 h-[50px]">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <img className="w-[1100px] hidden lg:block" src={image} alt="/" />
        </div>
      </div>
      <HowOrders />
      <CardOrders />
      <HowOrders />
      <Souporter />
      <HowOrders />
      <Programmer />
    </>
  );
}

export default Services;
