import Main from "../module/Main";
import Saidbar from "../module/Saidbar";

import bg from "../../assets/images/back.jpg";

function CookInMamanPaz() {
  return (
    <div
      className="flex xl:h-[340vh] lg:h-[360vh] md:h-[900vh] sm:h-[900vh] h-[900vh] gap-10 mt-[4rem]"
      style={{
        backgroundImage: `url(${`${bg}`})`,
        width: "100%",
      }}
    >
      <div className="xl:block hidden">
        <Saidbar />
      </div>
      <div className="rounded-lg max-w-[1190px] h-[100vh] flex justify-center flex-1 p-[2rem] gap-[1.5rem]">
        <Main />
      </div>
    </div>
  );
}

export default CookInMamanPaz;
