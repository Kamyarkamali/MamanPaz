import { show2 } from "../../data/data";

function whayManamPaz() {
  return (
    <>
      <h1 className="text-center mt-[3rem] text-[23px]">
        چرا مامان‌پز را انتخاب کنیم؟
      </h1>
      <div className="mt-[5rem] max-w-[700px] m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 h-[350px] rounded-lg">
        {show2.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-3">
            <img
              src={item.image}
              alt="/"
              className="shadow-lg shadow-gray-400 cursor-pointer h-[150px] w-[160px] rounded-lg "
            />
            <p className="mt-3 text-sm object-cover">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default whayManamPaz;
