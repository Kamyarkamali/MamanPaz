import { Link } from "react-router-dom";
import ordeer from "../../assets/images/online.jpg";

function OrderOnline() {
  return (
    <div className="mt-[6rem] max-w-[800px] m-auto flex lg:flex-row flex-col gap-5 items-center justify-around">
      <div>
        <img
          className="w-[382px] h-[275px] object-cover rounded-lg"
          src={ordeer}
          alt=""
        />
      </div>

      <div>
        <p className="lg:w-[450px] w-[370px] lg:text-[16.5px] text-sm leading-9 text-gray-700">
          شما می‌توانید از روی سایت و به طور مستقیم هم سفارش خود را از میان
          غذاهای مامان‌پز انتخاب و ثبت کنید. فقط در نظر داشته باشید که به دلیل
          محدودیت مامان‌ها در تهیه مواد اولیه‌، باید یک روز زودتر غذای خود را
          سفارش دهید. هر مامان در صورتی که چهار سفارش برای غذای مورد‌نظر دریافت
          کند آن را تهیه می‌کند.
        </p>
        <div className="flex justify-center mt-[4rem]">
          <Link to={"/cookforMamanPaz"}>
            <button className="bg-[#FF5851] text-white shadow-lg shadow-gray-500 w-[300px] h-[50px] rounded-lg">
              میخواهم سفارش دهم
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderOnline;
