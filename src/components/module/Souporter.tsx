import { sopurter } from "../../data/data";

function Souporter() {
  return (
    <div className="mt-[5rem] flex flex-col gap-24 items-center">
      {sopurter.map((item, index) => (
        <div key={index} className="items-center flex lg:flex-row flex-col">
          <div className="lg:w-[484px] h-[300px] bg-[#FAF4F4] flex flex-col justify-center">
            <h1 className="text-3xl mb-14 text-center">{item.title}</h1>
            <div className="flex justify-center">
              <p className="lg:w-[444px] w-[350px] text-[15px] text-center text-gray-700 leading-9">
                {item.detailse}
              </p>
            </div>
          </div>

          <img
            className="w-[396px] h-[300px] rounded-lg"
            src={item.image}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
}

export default Souporter;
