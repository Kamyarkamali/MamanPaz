import { IoMdClose } from "react-icons/io";
import { MyContext } from "../../contexts/Context";
import { useContext } from "react";

function LoginForm() {
  const { modalLogin, setModalLogin } = useContext(MyContext);
  return (
    <div className="overlay fixed right-0 left-0 top-0">
      <div className="flex flex-col items-center justify-center h-[600px]">
        <form className="w-[320px] relative bg-white h-[428px] border-2">
          <p className="text-2xl mr-4 mt-4">ورود</p>
          <div className="flex flex-col gap-[3rem] items-center">
            <input
              className="border-b-[1px] border-gray-400 mt-6 w-[273px] outline-none p-3"
              type="text"
              placeholder="شماره همراه"
            />
            <input
              className="border-b-[1px] border-gray-400 w-[273px] outline-none p-3"
              type="text"
              placeholder="رمز عبور"
            />
          </div>
          <div className="flex items-center gap-3 mt-8 justify-center w-[200px]">
            <input type="checkbox" />
            <p className="text-gray-400">مرا بخاطر بسپار</p>
          </div>
          <p className="text-sm text-center mt-4 hover:text-red-600 cursor-pointer">
            رمز عبور را نمیدانم / فراموش کرده ام
          </p>
          <div className="flex justify-center mt-7">
            <button className="bg-[#DFDFDF] h-[35px] w-[200px] rounded-lg text-gray-600">
              ورود به مامان پز
            </button>
          </div>
          <div className="absolute top-0 left-0 cursor-pointer">
            <IoMdClose size={22} onClick={() => setModalLogin(!modalLogin)} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
