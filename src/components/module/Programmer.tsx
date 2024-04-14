import pdf from "../../assets/menu_mamanpaz-e1.pdf";

function Programmer() {
  const download = () => {
    const pdfUrl = pdf;
    window.open(pdfUrl);
  };

  return (
    <div className="mt-[7rem] flex justify-center max-w-[800px] m-auto">
      <div className="flex  flex-col lg:items-center items-center rounded-lg lg:w-[843px] w-[400px] h-[371px] bg-[#FAF4F4]">
        <h1 className="text-[30px] mb-[3rem] mt-6">برنامه هفتگی اختصاصی</h1>
        <p className="lg:w-[670px] w-[390px] text-center text-gray-500 leading-8 h-[97px] text-[15px]">
          اینجا یکی از مهم‌ترین بخش‌های سفارش غذا از مامان‌پزه. با تکیه به دانش
          و تجربه چندین ساله در ارایه غذای شرکتی، مصاحبه‌های دقیقی قبل از ثبت
          سفارش با شما خواهیم داشت تا برنامه غذایی متناسب با دغدغه‌های کارفرما و
          سلیقه کارمندها طراحی ‌کنیم.
        </p>
        <div className="flex lg:flex-row flex-col items-center  gap-9 justify-evenly w-full mt-[1rem]">
          <div className="lg:flex items-center hidden gap-3 border-[1px] rounded-2xl border-gray-500 p-2 w-[340px]">
            <label className="text-[14px] text-gray-500">تنوع غذا :</label>
            <select className="text-red-600 text-[13px] font-bold p-1">
              <option>یک نوع غذا در روز</option>
              <option>دو نوع غذا در روز</option>
              <option>سه نوع غذا در روز</option>
            </select>
          </div>
          <div className="lg:flex hidden items-center gap-3 border-[1px] rounded-2xl border-gray-500 p-2 w-[340px]">
            <label className="text-[13px] text-gray-500">محدوده قیمت:</label>
            <select className="text-red-600 text-[13px] font-bold p-1">
              <option>اقتصادی</option>
              <option>استاندارد</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-7 w-full">
          <button
            onClick={download}
            className="w-[270px] h-[50px] rounded-lg shadow-gray-400 shadow-lg bg-[#FF5851] text-white text-[15px]"
          >
            دانلود نمونه برنامه هفتگی
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programmer;
