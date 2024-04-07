import hero from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <div className="mt-[3rem] grid lg:grid-cols-3 md:grid-cols-1 lg:justify-between md:justify-center justify-center">
      {/* <div>right</div> */}

      <div className="flex justify-center mx-auto">
        {/* text */}
        <div className="flex flex-col items-center justify-center h-[530px] gap-14">
          <h1 className="text-[30px] text-center font-bold">
            ناهار شرکتی با طعمی از خونه
          </h1>
          <div className="w-[350px] h-[57px] flex justify-center">
            <span className="text-[#78909C] text-center w-[339px] leading-7 text-[18px] font-bold">
              مامان‌پز با غذاهای خانگی و سالم یک ناهار کاری فراموش نشدنی را برای
              شما رقم می‌زند.
            </span>
          </div>
          <button className="bg-[#FF5851] p-3 w-[300px] text-white rounded-lg shadow-lg shadow-gray-400">
            ناهار شرکتی میخواهم
          </button>
        </div>
      </div>

      <div className="2xl:w-[1053px] xl:w-[840px] lg:w-[670px] md:w-[700px]">
        <img
          className="lg:w-[1300px] rounded-lg w-[800px] lg:h-[600px]"
          src={hero}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Hero;
