import { createContext } from "react";

export const initial = {
  name: "budi",
  nameHandler: () => {},
};

const AppContext = createContext(initial);

export default AppContext;
