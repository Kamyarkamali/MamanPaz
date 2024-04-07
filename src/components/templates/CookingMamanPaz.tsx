import { useContext } from "react";
import cooking from "../../assets/images/cookingmaman.jpg";
import { MyContext } from "../../contexts/Context";
import { citys } from "../../data/data";
import Hamkari from "../module/Hamkari";
import HowOrders from "../module/HowOrders";

function CookingMamanPaz() {
  const { hamburgerMenu } = useContext(MyContext);
  return (
    <>
      <div
        className={`${
          hamburgerMenu ? "hidden" : "block"
        } mt-[3rem] flex justify-center`}
      >
        <div className="absolute right-0 top-[-6.6rem] lg:top-0 flex justify-center lg:justify-start w-full z-30 mt-[11rem]">
          <form className="w-[417px] shadow-lg shadow-gray-400 rounded-lg h-[610px] border-2">
            <h1 className="text-center mt-9 text-xl">فرم ثبت نام</h1>
            <div className="flex justify-center mt-3 gap-8">
              <input
                type="text"
                className="w-[150px] h-[50px] outline-none p-5 rounded-lg border-[1px] border-gray-400"
                placeholder="نام"
              />
              <input
                type="text"
                className="w-[150px] h-[50px] outline-none p-5 rounded-lg border-[1px] border-gray-400"
                placeholder="نام خانوادگی"
              />
            </div>
            <div className="flex justify-center mt-[2.6rem] gap-8">
              <input
                type="text"
                className="w-[150px] h-[50px] outline-none p-5 rounded-lg border-[1px] border-gray-400"
                placeholder="شماره موبایل"
              />
              <input
                type="text"
                className="w-[150px] h-[50px] outline-none p-5 rounded-lg border-[1px] border-gray-400"
                placeholder="تلفن ثابت"
              />
            </div>
            <div className="flex justify-center mt-[2.6rem] gap-8">
              <div className="flex border-[1px] p-2 rounded-lg w-[190px] bg-white text-[14px] text-gray-500">
                <label>شهر</label>
                <select>
                  {citys.map((i, index) => (
                    <option key={index}>{i.city}</option>
                  ))}
                </select>
              </div>
              <div className="flex border-[1px] p-2 rounded-lg w-[190px] bg-white text-[14px] text-gray-500">
                <label>استان</label>
                <select>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-9">
              <textarea
                className="w-[340px] outline-none p-3 rounded-lg border-[1px] border-gray-500"
                placeholder="آدرس"
                style={{ resize: "none" }}
              />
            </div>
            <div className="flex justify-center mt-9">
              <input
                className="w-[340px] outline-none p-3 rounded-lg border-[1px] border-gray-500"
                placeholder="توانایی پخت چند پرس غذا را در روز دارید؟"
              />
            </div>
            <div className="flex justify-center mt-9">
              <button className="w-[366px] h-[50px] bg-[#DFDFDF] rounded-lg text-gray-400">
                ثبت نام کنید
              </button>
            </div>
          </form>
        </div>
        {/* <div>center</div> */}
        <div className="relative">
          <img src={cooking} alt="/" className=" h-auto lg:block  w-[2100px]" />
        </div>
      </div>
      <div className="lg:mt-[6rem] mt-[28rem]">
        <HowOrders />
        <Hamkari />
      </div>
    </>
  );
}

export default CookingMamanPaz;
