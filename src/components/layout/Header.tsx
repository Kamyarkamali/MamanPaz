import { useContext, useEffect } from "react";
import TopMenu from "../module/TopMenu";
import HamburgerMenu from "../module/HamburgerMenu";
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../contexts/Context";
import { motion } from "framer-motion";

//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import LoginForm from "../module/LoginForm";

function Header() {
  const {
    hamburgerMenu,
    setHamburgerMenu,
    openRegister,
    setOpenregister,
    modalLogin,
    setModalLogin,
  } = useContext(MyContext);

  useEffect(() => {
    function hanelClick() {
      if (hamburgerMenu) {
        setHamburgerMenu(false);
        setModalLogin(false);
      }
    }
    document.addEventListener("click", hanelClick);
    return () => {
      document.removeEventListener("click", hanelClick);
    };
  }, [hamburgerMenu]);

  // close box register/login
  const registerHandeler = () => {
    /* @ts-ignore */
    setOpenregister((prev) => !prev);
    setModalLogin(false);
  };

  const loginHandeler = () => {
    /* @ts-ignore */
    setModalLogin((prev) => !prev);
    setOpenregister(false);
  };

  return (
    <div className={`${hamburgerMenu ? "overlay z-[100000]" : null}`}>
      <div className="max-w-[1583px] z-50 fixed top-[-1.3rem] p-5 left-0 right-0 bg-white mt-4 m-auto">
        <div className="flex items-center justify-between 2xl:max-w-[1540px] m-auto">
          <div className="flex items-center gap-4">
            <Link to={"/"}>
              <img src={logo} alt="/" className="w-[40px] lg:mr-0 mr-9" />
            </Link>
            <TopMenu />
          </div>

          <div className="flex gap-3 lg:ml-0  ml-9">
            <button className="border-[1px] w-[119px] h-[36px] text-[#EF5350] text-sm p-[6px] font-bold rounded-lg border-[#EF5350]">
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

            <div className="relative">
              <button
                onClick={() => setOpenregister(!openRegister)}
                className="bg-[#EF5350] w-[119px] h-[36px] lg:block hidden p-[6px] text-sm text-white font-bold rounded-lg"
              >
                ثبت نام / ورود
              </button>
            </div>
            {/* top menu login/register */}
            {openRegister && (
              <div className="absolute shadow-md shadow-gray-300 rounded-lg hidden left-[2rem] lg:flex flex-col w-[200px] justify-center top-[4rem] bg-white p-3">
                <Link
                  to={"/register"}
                  className="border-b-2 flex justify-center cursor-pointer hover:bg-blue-300 p-1 rounded-lg hover:text-white duration-200"
                >
                  <button onClick={registerHandeler}>ثبت نام</button>
                </Link>

                <button
                  className="cursor-pointer flex justify-center hover:bg-blue-300 p-1 rounded-lg hover:text-white duration-200"
                  onClick={loginHandeler}
                >
                  ورود
                </button>
              </div>
            )}

            {/* login form modal */}
            {modalLogin && <LoginForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
