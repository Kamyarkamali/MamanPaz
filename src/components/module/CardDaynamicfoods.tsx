import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";
import { foodsCardData } from "../../data/data";
import { IoStar } from "react-icons/io5";
import { sp } from "../../replaceNumber";
import { MyContext } from "../../contexts/Context";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addToCart,
  decrementQuantity,
} from "../../Redux/CreatReducer/actionReducer";
import { MESSEGEALERT } from "../../types/enum";

const CardDaynamicfoods = () => {
  const { selected, setselected } = useContext(MyContext);

  const [messege, setMessege] = useState<boolean>(false);

  const { id } = useParams();

  const named: any = id?.split(":");

  const filtered: any = foodsCardData.filter((item) => item.name === named[1]);

  const [filteredData, setFilteredData] = useState<any[]>(filtered);

  const onChangeHandeler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setselected(value);
    /* @ts-ignore */
    const categorys = filtered.filter((item) => item.category === value);

    if (value === "all") {
      setFilteredData(filtered);
      setMessege(false);
    } else if (categorys.length === 0) {
      setFilteredData(categorys);
      setMessege(true);
    } else {
      setFilteredData(categorys);
      setMessege(false);
    }
  };

  const [local, setLocal] = useState<any[]>([]);
  /* @ts-ignore */

  const state = useSelector((state) => state.counter.shopping);

  const dispatch = useDispatch();

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setLocal(storeData);
  }, []);

  const addToCartHandler = (item: any) => {
    const updatedCart = [...local, { ...item, quantity: 1 }];
    /* @ts-ignore */
    setLocal(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    dispatch(addToCart(item));
    toast.success(MESSEGEALERT.success);
  };

  const decrements = (id: number) => {
    dispatch(decrementQuantity(id));
    toast.success(MESSEGEALERT.decrement);
    const update = local.map((item) => {
      if (item.quantity === 1) {
        return;
      } else if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    /* @ts-ignore */
    setLocal(update);
  };

  // function show quantity products
  /* @ts-ignore */
  const getQuantityById = (itemId) => {
    /* @ts-ignore */
    const item = state.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="lg:w-[1007px] w-[400px] h-[83px] mt-8 shadow-md p-2 rounded-lg bg-white shadow-gray-400">
          <div className="flex items-center justify-around">
            <div className="flex items-center gap-2">
              <label htmlFor="foods">نوع غذا :</label>
              <select
                onChange={onChangeHandeler}
                value={selected}
                className="w-[300px] border-2 p-1"
              >
                <option value="all">همه</option>
                <option value="berenj">برنج</option>
                <option value="qeyreberenji">غیر برنجی</option>
                <option value="khoresht">خورشت</option>
                <option value="morgh">مرغ</option>
                <option value="salad">سالاد</option>
              </select>
            </div>
            <div>
              <div className="lg:flex hidden text-center text-xl cursor-pointer gap-8">
                <span className="bg-[#EE6E73] rounded-md w-[30px]">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-10 mt-[3rem] max-w-[1300px] m-auto">
        {messege ? (
          <p className="text-center lg:w-[1300px] bg-gray-300 p-2 rounded-md text-red-700">
            آیتم مورد نظر برای این مامان وجود ندارد :)
          </p>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} className="shadow-lg p-6 relative bg-white">
              <img
                src={item.imageFood}
                alt="/"
                className="w-full object-cover h-[200px] rounded-lg"
              />
              <div className="flex justify-between mt-5">
                <p className="text-[19px]">{item.title}</p>
                <p className="font-bold text-[16px] text-red-600">
                  {sp(item.price)} تومان
                </p>
              </div>
              <div className="flex items-center mt-3">
                <img
                  src={item.imageProfile}
                  alt="/"
                  className="w-[40px] rounded-full"
                />
                <p className="text-sm w-full">{item.name}</p>
                <div className="flex items-center gap-1 justify-end w-full">
                  <IoStar size={18} color="yellow" />
                  <p>{item.star}</p>
                </div>
              </div>
              <div className="absolute bottom-[7rem] cursor-pointer rounded-lg flex flex-col items-center justify-center left-[2rem] w-[70px] h-[40px] bg-[#F44336]">
                <div className="flex items-center gap-4">
                  <p
                    onClick={() => addToCartHandler(item)}
                    className=" text-white text-xl font-bold"
                  >
                    +
                  </p>
                  <p className="text-white tetx-xl">
                    {getQuantityById(item.id)}
                  </p>
                  <p
                    onClick={() => decrements(item.id)}
                    className=" text-white text-xl font-bold"
                  >
                    -
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Toaster />
    </>
  );
};

export default CardDaynamicfoods;
