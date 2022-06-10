import LayoutMain from "../../layouts/LayoutMain";
import CarCard from "../../components/CarCard.js";
import TheButton from "../../components/units/TheButton";

function Home() {
  return (
    <LayoutMain>
      <CarCard></CarCard>
      <TheButton type="primary" />
    </LayoutMain>
  );
}

export default Home;
