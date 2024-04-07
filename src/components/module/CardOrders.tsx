import { howfoods } from "../../data/data";

function CardOrders() {
  return (
    <div className="mt-[12rem] max-w-[1400px] m-auto grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 justify-center">
      {howfoods.map((i) => (
        <div key={i.id} className="flex justify-center">
          <div key={i.id} className="w-[330px]">
            <div className="flex justify-center">
              <img src={i.image} alt="" />
            </div>
            <p className="text-center font-bold">{i.title}</p>
            <p className="text-sm text-gray-600 mt-3 leading-6 text-center w-[300px]">
              {i.detailse}
            </p>
          </div>
        </div>
      ))}

      <div className="flex justify-center 2xl:w-[1400px] xl:w-[1400px] lg:hidden md:w-[700px] m-auto">
        <button className="bg-[#FF5851] w-[270px] h-[50px] rounded-lg text-white shadow-lg shadow-gray-400">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
}

export default CardOrders;
