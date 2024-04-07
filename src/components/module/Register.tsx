import { GoClock } from "react-icons/go";
import { MdFoodBank } from "react-icons/md";
import { FaCalculator } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from "../../contexts/Context";

function Register() {
  const { modalLogin, setModalLogin } = useContext(MyContext);
  return (
    <div className="mt-[7rem]">
      <div className="max-w-[1300px] m-auto">
        <h1 className="text-xl text-red-500 font-bold">
          نکات سفارش از مامان‌پز
        </h1>
        <div className="mt-[2rem] flex items-center gap-3">
          <GoClock size={29} color="red" />
          <p className="lg:text-[16.5px] text-sm w-[562px] text-gray-600">
            برای سفارش از مامان پز باید سفارش خود را حداقل یک روز قبل ثبت
            نمایید.
          </p>
        </div>
        <div className="mt-[2rem] flex leading-8 items-center gap-3">
          <MdFoodBank size={33} color="red" />
          <p className="lg:text-[16.5px] text-sm w-[562px] text-gray-600">
            تمام غذاهای مامان‌پز از مواد اولیه درجه یک و تازه توسط خانم های خانه
            دار متبحر در آشپزی و دارای کارت بهداشت طبخ می شود.
          </p>
        </div>
        <div className="mt-[2rem] flex items-center gap-3">
          <FaCalculator size={33} color="red" />
          <p className="lg:text-[16.5px] text-sm w-[562px] text-gray-600">
            حداقل سفارش از هر نوع غذا توسط مامان ها مشخص می شود که معمولا ۴ پرس
            است.
          </p>
        </div>
        <div className="mt-[2rem] flex items-center gap-3">
          <FaLocationDot size={33} color="red" />
          <p className="lg:text-[16.5px] text-sm w-[562px] leading-8 text-gray-600">
            ارسال غذا به کل تهران با پیک و آژانس صورت می گیرد. هزینه ارسال با
            تخفیف به صورت درصدی از سبد خرید شما محاسبه می شود. معمولا در سفارش
            های بالای ۱۵ پرس، ارسال رایگان است.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col items-center">
          <form className="flex flex-col w-[365px] h-[781px] shadow-md shadow-gray-400 rounded-lg p-5 gap-10 items-center mt-[3rem] border-2">
            <p className="text-gray-500">ثبت نام</p>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-500">نام *</label>
              <input
                type="text"
                required
                className="border-[1px] p-3 border-gray-500 rounded-lg w-[330px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-500">نام خانوادگی *</label>
              <input
                type="text"
                required
                className="border-[1px] p-3 border-gray-500 rounded-lg w-[330px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-500">شماره موبایل *</label>
              <input
                type="text"
                required
                className="border-[1px] p-3 border-gray-500 rounded-lg w-[330px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-500">پست الکترونیک</label>
              <input
                type="text"
                required
                className="border-[1px] p-3 border-gray-500 rounded-lg w-[330px] outline-none"
              />
            </div>
            <div className="flex w-[200px] rounded-md bg-gray-400 text-white cursor-pointer shadow-lg shadow-gray-200  justify-center border-2 p-3">
              <button>ثبت</button>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-gray-500 text-[14px]">
                با ثبت نام در مامان پز شرایط عضویت را می پذیرم
              </p>
              <input type="checkbox" />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-500">حساب کاربری دارید؟</p>
              <p
                onClick={() => setModalLogin(!modalLogin)}
                className="text-red-500 cursor-pointer"
              >
                وارد شوید؟
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
