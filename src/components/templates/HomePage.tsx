import CardOrders from "../module/CardOrders";
import FaivertFoodLine from "../module/FaivertFoodLine";
import Hero from "../module/Hero";
import HowOrders from "../module/HowOrders";
import HowOrders2 from "../module/HowOrders2";
import SliderBank from "../module/SliderBank";
import SliderMamanPaz from "../module/SliderMamanPaz.";
import WhayManamPaz from "../module/WhayManamPaz";

function HomePage() {
  return (
    <div>
      <Hero />
      <HowOrders />
      <CardOrders />
      <SliderBank />
      <WhayManamPaz />
      <FaivertFoodLine />
      <SliderMamanPaz />
      <HowOrders2 />
    </div>
  );
}

export default HomePage;
