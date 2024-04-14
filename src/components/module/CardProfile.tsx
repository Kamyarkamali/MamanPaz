import { FC } from "react";
import { IcardProfile } from "../../types/interface";
import { IoStar } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { sp } from "../../replaceNumber";

const CardProfile: FC<IcardProfile> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex flex-col items-center mt-5">
          <img
            className="rounded-full w-[112px] h-[112px]"
            src={item.prifileImg}
            alt={item.name}
          />
          <p className="mt-4 text-gray-700 font-bold text-xl">{item.name}</p>
          <div className="flex items-center mt-3 bg-[#EEEEEE] p-1 rounded-md">
            <p className="flex items-center text-sm gap-1">
              {sp(2525)}
              <FaUser color="gray" size={11} />
            </p>
            <IoStar size={16} color="yellow" />
            <p className="text-md">{item.starNumber}</p>
          </div>
          <div className="flex items-center justify-evenly w-[140px] mt-3 text-gray-800">
            <p>فروش :</p>
            <p>{sp(item.order)}</p>
          </div>
          <div className="flex items-center justify-evenly w-[170px] mt-3 text-gray-800">
            <p>تعداد غذای فعال :</p>
            <p>{sp(item.foodActive)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProfile;
