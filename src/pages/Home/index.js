import { useContext } from "react";
import AppContext from "../../store/AppContext";
import LayoutMain from "../../layouts/LayoutMain";
import CarCard from "../../components/CarCard";

function Home() {
  const { nameHandler, name } = useContext(AppContext);

  return (
    <LayoutMain>
      <CarCard />

      <h1 onClick={nameHandler}>{name}</h1>
    </LayoutMain>
  );
}

export default Home;
