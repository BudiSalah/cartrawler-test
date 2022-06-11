import { useContext } from "react";
import AppContext from "../../../store/AppContext";
import style from "./style.module.scss";
import SvgPlane from "./../../svg/SvgPlane";
import SvgCalendar from "./../../svg/SvgCalendar";

function PickReturn() {
  const { vehRentalCore } = useContext(AppContext);
  const pickData = new Date(vehRentalCore?.["@PickUpDateTime"]);
  const returnData = new Date(vehRentalCore?.["@ReturnDateTime"]);
  const pickDataIsValid = pickData instanceof Date && !isNaN(pickData);
  const returnDataIsValid = returnData instanceof Date && !isNaN(returnData);

  return (
    <div className={`${style["pick-return"]} flex`}>
      <div className="flex flex-row items-center">
        <SvgCalendar />

        <p className={`${style["pick-return__text"]} body-s capitalize`}>
          <strong>pick:</strong>
          <span>{(pickDataIsValid && pickData?.toDateString()) || "..."}</span>
        </p>

        <p className={`${style["pick-return__text"]} body-s capitalize`}>
          <strong>return:</strong>
          <span>
            {(returnDataIsValid && returnData?.toDateString()) || "..."}
          </span>
        </p>
      </div>

      <div className="flex flex-row items-center">
        <SvgPlane />

        <p className={`${style["pick-return__text"]} body-s capitalize`}>
          <strong>pick:</strong>
          <span>{vehRentalCore?.PickUpLocation?.["@Name"] || "..."}</span>
        </p>

        <p className={`${style["pick-return__text"]} body-s capitalize`}>
          <strong>return:</strong>
          <span>{vehRentalCore?.PickUpLocation?.["@Name"] || "..."}</span>
        </p>
      </div>
    </div>
  );
}

export default PickReturn;
