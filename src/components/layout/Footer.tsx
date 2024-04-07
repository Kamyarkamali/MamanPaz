function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-9">
      <div className="bg-[#CFD8DC] w-full flex justify-evenly p-3">
        <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-0 justify-around w-full p-3">
          <p className="text-gray-700 font-bold">مامان‌پز پشتیبان شماست!</p>
          <p className="text-gray-700 font-bold">
            پشتیبانی امور مشتریان: 09100016400
          </p>
          <p className="text-gray-700 font-bold">info@mamanpaz.ir</p>
        </div>
      </div>
      <div className="bg-[#ECEFF1] w-full p-3">center</div>
      <div>left</div>
    </div>
  );
}

export default Footer;
