// import { useContext } from "react";
// import { MyContext } from "../../contexts/Context";

import logo from "../../assets/images/logo.png";
import { hamburgerMenuTitle } from "../../data/data";

function HamburgerMenu() {
  // const { hamburgerMenu, setHamburgerMenu } = useContext(MyContext);

  return (
    <div className="bg-[#FFFFFF] h-[110vh] z-30 duration-300 w-[300px]">
      <div className="flex flex-col items-center w-[100px] justify-center h-[100px]">
        <img src={logo} alt="/" className="w-[40px]" />
      </div>
      <div className="flex flex-col w-[200px] font-bold gap-5 mr-6 ">
        {hamburgerMenuTitle.map((item) => (
          <ul
            key={item.id}
            className="hover:bg-blue-100 duration-150 cursor-pointer text-[13px] p-3 w-[276px] rounded-lg"
          >
            <li>{item.title}</li>
          </ul>
        ))}
        <div className="border-t-[1px] border-gray-500 w-[274px]">
          <div className="flex flex-col items-center text-[13px] mt-5 gap-4 w-[76px] ">
            <button className="hover:bg-blue-100 duration-150 w-[476px] p-4 cursor-pointer">
              ورود
            </button>
            <button className="hover:bg-blue-100 duration-150 w-[476px] p-4 cursor-pointer">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
