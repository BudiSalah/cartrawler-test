import { useContext, useState, useEffect } from "react";
import AppContext from "../../store/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import LayoutMain from "../../layouts/LayoutMain";
import CarCard from "../../components/CarCard";
import TopLegend from "../../components/units/TopLegend";

function Single() {
  const { id } = useParams();
  const navigation = useNavigate();
  const { vehiclesAscending } = useContext(AppContext);
  const [target, setTarget] = useState("");

  useEffect(() => {
    if (vehiclesAscending.length >= 1) {
      setTarget(
        vehiclesAscending.filter((item) => item.id === Number(id))?.[0]
      );
    }
  }, [id, vehiclesAscending]);

  useEffect(() => {
    if (target === undefined || target === null) {
      navigation("/404");
    }
  }, [target, navigation]);

  return (
    <>
      {target && (
        <LayoutMain>
          <TopLegend />
          <CarCard
            btnLink="/"
            vehicleData={target}
            vendor={target?.vendor}
            btnText="Book Now"
          />
        </LayoutMain>
      )}
    </>
  );
}

export default Single;
