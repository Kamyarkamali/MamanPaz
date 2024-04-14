import { Link } from "react-router-dom";
import { foods } from "../../data/data";
import { sp } from "../../replaceNumber";
import { IoStar } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addToCart,
  decrementQuantity,
} from "../../Redux/CreatReducer/actionReducer";
import { MESSEGEALERT } from "../../types/enum";

function Main() {
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
    <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-10">
      {foods.map((item) => (
        <div key={item.id} className="shadow-lg p-6 relative bg-white">
          <img
            src={item.image}
            alt="/"
            className="w-[330px] h-[200px] rounded-lg"
          />
          <div className="flex justify-between mt-3">
            <p className="text-[14px]">{item.name}</p>
            <p className="font-bold text-sm text-red-600">
              {sp(item.price)} تومان
            </p>
          </div>
          <Link to={`/:${item.maman}`}>
            <div className="flex items-center mt-3">
              <img
                src={item.profie}
                alt="/"
                className="w-[40px] rounded-full"
              />
              <p className="text-sm w-full">{item.maman}</p>
              <div className="flex items-center gap-1 justify-end w-full">
                <IoStar size={18} color="yellow" />
                <p>{item.star}</p>
              </div>
            </div>
          </Link>
          <div className="absolute bottom-[9rem] cursor-pointer rounded-lg flex flex-col items-center justify-center left-[2rem] w-[70px] h-[40px] bg-[#F44336]">
            <div className="flex items-center gap-4">
              <p
                onClick={() => addToCartHandler(item)}
                className=" text-white text-xl font-bold"
              >
                +
              </p>
              <p className="text-white tetx-xl">{getQuantityById(item.id)}</p>
              <p
                onClick={() => decrements(item.id)}
                className=" text-white text-xl font-bold"
              >
                -
              </p>
            </div>
          </div>
        </div>
      ))}
      <Toaster />
    </div>
  );
}

export default Main;
