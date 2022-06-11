import { createContext } from "react";

export const initial = {
  vehRentalCore: {},
  vehVendorAvails: [],
  vehiclesAscending: [],
  vehiclesDescending: [],
};

const AppContext = createContext(initial);

export default AppContext;
