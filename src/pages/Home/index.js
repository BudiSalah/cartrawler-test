import { useContext, useState } from "react";
import AppContext from "../../store/AppContext";
import LayoutMain from "../../layouts/LayoutMain";
import CarCard from "../../components/CarCard";
import TopLegend from "../../components/units/TopLegend";

function Home() {
  const { vehiclesAscending, vehiclesDescending } = useContext(AppContext);

  const [sort, setSort] = useState("ascending");

  const FinalList = (
    sort === "ascending" ? vehiclesAscending : vehiclesDescending
  )?.map((item, index) => {
    return <CarCard key={index} vehicleData={item} vendor={item?.vendor} />;
  });

  return (
    <LayoutMain>
      <TopLegend setSort={setSort} />
      {FinalList}
    </LayoutMain>
  );
}

export default Home;
