import { useContext, useEffect } from "react";
import TopMenu from "../module/TopMenu";
import HamburgerMenu from "../module/HamburgerMenu";
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../contexts/Context";
import { motion } from "framer-motion";

//icons
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const { hamburgerMenu, setHamburgerMenu } = useContext(MyContext);

  useEffect(() => {
    function hanelClick() {
      if (hamburgerMenu) {
        setHamburgerMenu(false);
      }
    }
    document.addEventListener("click", hanelClick);
    return () => {
      document.removeEventListener("click", hanelClick);
    };
  }, [hamburgerMenu]);

  return (
    <div className={`${hamburgerMenu ? "overlay" : null}`}>
      <div className="max-w-[1583px] mt-4 m-auto">
        <div className="flex items-center justify-between 2xl:max-w-[1540px] m-auto">
          <div className="flex items-center gap-4">
            <img src={logo} alt="/" className="w-[40px] lg:mr-0 mr-9" />
            <TopMenu />
          </div>

          <div className="flex gap-3 lg:ml-0  ml-9">
            <button className="border-[1px] w-[116px] text-[#EF5350] text-sm p-[6px] font-bold rounded-lg border-[#EF5350]">
              پنل نهار شرکتی
            </button>

            {/* hamburgermeu */}
            <div className="lg:hidden cursor-pointer relative">
              <GiHamburgerMenu
                size={35}
                onClick={(e) => {
                  e.stopPropagation();
                  setHamburgerMenu(!hamburgerMenu);
                }}
              />
            </div>

            {hamburgerMenu && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: hamburgerMenu ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="lg:hidden absolute right-0 top-[-15px]"
              >
                <HamburgerMenu />
              </motion.div>
            )}

            <button className="bg-[#EF5350] lg:block hidden w-[116px] p-[6px] text-sm text-white font-bold rounded-lg">
              ثبت نام / ورود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
