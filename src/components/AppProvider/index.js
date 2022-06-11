import { useState, useEffect } from "react";
import AppContext, { initial } from "./../../store/AppContext";

function AppProvider(props) {
  const [vehRentalCore, setVehRentalCore] = useState(initial.vehRentalCore);
  const [vehVendorAvails, setVehVendorAvails] = useState(
    initial.vehVendorAvails
  );

  const vehRentalCoreHandler = () => {};
  const vehVendorAvailsHandler = () => {};

  useEffect(() => {
    fetch(`/ctabe/cars.json`)
      .then((response) => response.json())
      .then((data) => {
        const { VehRentalCore, VehVendorAvails } = data?.[0]?.VehAvailRSCore;
        setVehRentalCore(VehRentalCore);
        setVehVendorAvails(VehVendorAvails);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        vehRentalCore,
        vehVendorAvails,
        vehRentalCoreHandler,
        vehVendorAvailsHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
