import { useState } from "react";
import AppContext, { initial } from "./../../store/AppContext";

function AppProvider(props) {
  const [name, setName] = useState(initial.name);
  const nameHandler = () => setName(name === "budi" ? "salah" : "budi");

  return (
    <AppContext.Provider
      value={{
        name,
        nameHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
