import { useState, useEffect } from "react";
import AppContext, { initial } from "./../../store/AppContext";

function AppProvider(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [vehRentalCore, setVehRentalCore] = useState(initial.vehRentalCore);
  const [vehVendorAvails, setVehVendorAvails] = useState(
    initial.vehVendorAvails
  );

  useEffect(() => {
    setLoading(true);
    setError(false);

    try {
      fetch(`/ctabe/cars.json`)
        .then((response) => response.json())
        .then((data) => {
          const { VehRentalCore, VehVendorAvails } = data?.[0]?.VehAvailRSCore;
          setVehRentalCore(VehRentalCore);
          setVehVendorAvails(VehVendorAvails);
          setLoading(false);
        });
    } catch (e) {
      setError(true);
    }
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
        loading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
