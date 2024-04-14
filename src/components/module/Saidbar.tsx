function Saidbar() {
  return (
    <div className="flex flex-col items-center gap-10 mt-[2rem]">
      <div className="bg-white w-[310px] h-[209px] p-3 shadow-lg shadow-gray-300 rounded-lg">
        <div className="flex flex-col items-center h-[200px] gap-20">
          <input
            className="w-[283px] h-[40px] border-b-[1px] border-gray-500 p-2 outline-none"
            type="text"
            placeholder="نام مامان"
          />
          <input
            className="w-[283px] h-[40px] border-b-[1px] border-gray-500 p-2 outline-none"
            type="text"
            placeholder="نام غذا"
          />
        </div>
      </div>
      <div className="bg-white p-3 shadow-lg w-[331px] h-[297px] shadow-gray-300 rounded-lg">
        <div className="flex mt-[6px]  items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">موجود</label>
        </div>
        <div className="flex mt-[6px]  items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">جدید</label>
        </div>
        <div className="flex mt-[6px]  items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">تخفیف دار</label>
        </div>
        <div className="flex  mt-[6px] items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">گیاه خواری</label>
        </div>
        <div className="flex mt-[6px]  items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">عکس دار</label>
        </div>
        <div className="flex mt-[6px]  items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">رژیمی</label>
        </div>
        <div className="flex mt-[6px]  items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">دیسی</label>
        </div>
        <div className="flex  mt-[6px] items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">محلی</label>
        </div>
        <div className="flex  mt-[6px] items-center gap-3">
          <input type="checkbox" />
          <label className="text-[16px] text-gray-500">نذری</label>
        </div>
      </div>
    </div>
  );
}

export default Saidbar;
