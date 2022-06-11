import { useState, useEffect } from "react";
import AppContext, { initial } from "./../../store/AppContext";
import data from "./cars.json";

function AppProvider(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [vehRentalCore, setVehRentalCore] = useState(initial.vehRentalCore);
  const [vehVendorAvails, setVehVendorAvails] = useState(
    initial.vehVendorAvails
  );
  const [priceSort, setPriceSort] = useState(initial.priceSort);

  useEffect(() => {
    const { VehRentalCore, VehVendorAvails } = data?.[0]?.VehAvailRSCore;
    setVehRentalCore(VehRentalCore);
    setVehVendorAvails(VehVendorAvails);
    setLoading(false);
  }, []);

  let all = vehVendorAvails;
  let index = 0;

  all = all.map((item) => {
    return item.VehAvails.map((car) => {
      return { id: (index += 1), ...car, vendor: item.Vendor };
    });
  });

  all = all.flat();

  function ascendingHandler(a, b) {
    if (
      Number(a?.TotalCharge["@RateTotalAmount"]) <
      Number(b?.TotalCharge["@RateTotalAmount"])
    ) {
      return -1;
    }

    if (
      Number(a?.TotalCharge["@RateTotalAmount"]) >
      Number(b?.TotalCharge["@RateTotalAmount"])
    ) {
      return 1;
    }

    return 0;
  }

  function descendingHandler(a, b) {
    if (
      Number(a?.TotalCharge["@RateTotalAmount"]) >
      Number(b?.TotalCharge["@RateTotalAmount"])
    ) {
      return -1;
    }

    if (
      Number(a?.TotalCharge["@RateTotalAmount"]) <
      Number(b?.TotalCharge["@RateTotalAmount"])
    ) {
      return 1;
    }

    return 0;
  }

  const vehiclesAscending = all.sort(ascendingHandler);
  const vehiclesDescending = [...all].sort(descendingHandler);

  return (
    <AppContext.Provider
      value={{
        vehRentalCore,
        vehVendorAvails,
        vehiclesAscending,
        vehiclesDescending,
        error,
        setError,
        loading,
        priceSort,
        setPriceSort,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
