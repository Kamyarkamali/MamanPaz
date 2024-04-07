import office from "../../assets/images/office.jpg";

function OrderOfice() {
  return (
    <div className="mt-[6rem] max-w-[800px] m-auto flex lg:flex-row flex-col items-center gap-5  justify-around">
      <div>
        <img
          className="w-[382px] h-[275px] object-cover rounded-lg"
          src={office}
          alt=""
        />
      </div>

      <div>
        <p className="w-[350px] lg:text-[16.5px] text-sm leading-9 text-gray-700">
          اگر شرکتی هستید که می‌خواهید برای تامین غذای روزانه کارکنان خود از
          خدمات مامان‌پز استفاده کنید، فقط کافیست اطلاعات تماس خود را با ما به
          اشتراک بگذارید تا کارشناسان مامان‌پز با شما تماس بگیرند.
        </p>
        <div className="flex justify-center mt-[4rem]">
          <button className="bg-[#FF5851] text-white shadow-lg shadow-gray-500 w-[300px] h-[50px] rounded-lg">
            ناهار شرکتی میخواهم
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderOfice;
