import { createContext } from "react";

export const initial = {
  vehRentalCore: {},
  vehVendorAvails: [],
  vehRentalCoreHandler: () => {},
  vehVendorAvailsHandler: () => {},
};

const AppContext = createContext(initial);

export default AppContext;
