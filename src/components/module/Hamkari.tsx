import { loginData } from "../../data/data";

function Hamkari() {
  return (
    <div className="mt-[11rem]">
      <p className="text-center text-gray-600">
        برای اینکه به تیم مامان‌پز اضافه بشید باید سه مرحله رو پشت سر بذارید. ما
        در اینجا بهتون می‌گیم که چی‌کار کنید.
      </p>
      <div className="max-w-[1200px] m-auto">
        {loginData.map((item, index) => (
          <div
            key={index}
            className="flex justify-center flex-col lg:flex-row 2xl:w-[1200px] xl:w-[1200px] lg:w-[1010px] md:w-[814px] sm:w-[690px] w-[480px] bg-[#FAF4F4] mt-9 rounded-lg items-center"
          >
            <img className="w-[300px]" src={item.image} alt="/" />
            <div className="flex flex-col items-start w-full">
              <p className="text-xl mt-5 mb-2">{item.title}</p>
              <p className="text-gray-700 lg:w-[900px] w-[380px] md:w-[700px] text-start leading-8">
                {item.detailse}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hamkari;
