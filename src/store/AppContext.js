import { createContext } from "react";

export const initial = {
  vehRentalCore: {},
  vehVendorAvails: [],
  vehiclesAscending: [],
  vehiclesDescending: [],
  error: false,
  loading: true,
};

const AppContext = createContext(initial);

export default AppContext;
