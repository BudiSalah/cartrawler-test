import { useContext } from "react";
import AppContext from "../../store/AppContext";
import LayoutMain from "../../layouts/LayoutMain";
import CarCard from "../../components/CarCard";
import PickReturn from "../../components/units/PickReturn";

function Home() {
  const { vehVendorAvails } = useContext(AppContext);
  const FinalList = vehVendorAvails?.map((item) => {
    return item.VehAvails.map((data, index) => {
      return <CarCard key={index} vehicleData={data} vendor={item?.Vendor} />;
    });
  });

  return (
    <LayoutMain>
      <PickReturn />
      {FinalList}
    </LayoutMain>
  );
}

export default Home;
