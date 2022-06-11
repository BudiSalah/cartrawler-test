import { createContext } from "react";

export const initial = {
  vehRentalCore: {},
  vehVendorAvails: [],
  vehiclesAscending: [],
  vehiclesDescending: [],
  error: false,
  loading: true,
  priceSort: "ascending",
};

const AppContext = createContext(initial);

export default AppContext;
