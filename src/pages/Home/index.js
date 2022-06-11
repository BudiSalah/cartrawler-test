import { useContext } from "react";
import AppContext from "../../store/AppContext";
import LayoutMain from "../../layouts/LayoutMain";
import CarCard from "../../components/CarCard";
import TopLegend from "../../components/units/TopLegend";

function Home() {
  const { vehiclesAscending, vehiclesDescending, priceSort } =
    useContext(AppContext);

  const FinalList = (
    priceSort === "ascending" ? vehiclesAscending : vehiclesDescending
  )?.map((item, index) => {
    return (
      <CarCard
        key={index}
        vehicleData={item}
        vendor={item?.vendor}
        btnLink={`/${item.id}`}
      />
    );
  });

  return (
    <LayoutMain>
      <TopLegend showDropdown={true} />
      {FinalList}
    </LayoutMain>
  );
}

export default Home;
