import { useState, useEffect } from "react";
import AppContext, { initial } from "./../../store/AppContext";

function AppProvider(props) {
  const [vehRentalCore, setVehRentalCore] = useState(initial.vehRentalCore);
  const [vehVendorAvails, setVehVendorAvails] = useState(
    initial.vehVendorAvails
  );

  useEffect(() => {
    fetch(`/ctabe/cars.json`)
      .then((response) => response.json())
      .then((data) => {
        const { VehRentalCore, VehVendorAvails } = data?.[0]?.VehAvailRSCore;
        setVehRentalCore(VehRentalCore);
        setVehVendorAvails(VehVendorAvails);
      });
  }, []);

  let all = vehVendorAvails;

  all = all.map((item) => {
    return item.VehAvails.map((car) => {
      return { ...car, vendor: item.Vendor };
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
