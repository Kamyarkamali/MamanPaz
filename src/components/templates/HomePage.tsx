import CardOrders from "../module/CardOrders";
import Hero from "../module/Hero";
import HowOrders from "../module/HowOrders";

function HomePage() {
  return (
    <div>
      <Hero />
      <HowOrders />
      <CardOrders />
    </div>
  );
}

export default HomePage;
