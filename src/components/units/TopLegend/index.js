import { useContext, useState } from "react";
import AppContext from "../../../store/AppContext";
import style from "./style.module.scss";
import SvgPlane from "../../svg/SvgPlane";
import SvgCalendar from "../../svg/SvgCalendar";
import TheButton from "../TheButton";

function TopLegend(props) {
  const { vehRentalCore } = useContext(AppContext);
  const pickData = new Date(vehRentalCore?.["@PickUpDateTime"]);
  const returnData = new Date(vehRentalCore?.["@ReturnDateTime"]);
  const pickDataIsValid = pickData instanceof Date && !isNaN(pickData);
  const returnDataIsValid = returnData instanceof Date && !isNaN(returnData);
  const [sortText, setSortText] = useState("Low - High");

  function sortHandler({ target }) {
    const active = target
      .closest("[class*='dropdown__list']")
      .querySelector(".active");

    if (active) {
      active.classList.remove("active");
    }

    target.classList.add("active");

    setSortText(target?.innerText);
    props.setSort(target?.id?.match(/\w+/)?.[0]);
  }

  return (
    <div className={`${style.wrapper} flex justify-between`}>
      <div className={`${style["pick-return"]} flex`}>
        <div className={`${style["pick-return__meta"]} flex`}>
          <SvgCalendar />

          <p className={`${style["pick-return__text"]} body-s capitalize`}>
            <strong>pick:</strong>
            <span>
              {(pickDataIsValid && pickData?.toDateString()) || "..."}
            </span>
          </p>

          <p className={`${style["pick-return__text"]} body-s capitalize`}>
            <strong>return:</strong>
            <span>
              {(returnDataIsValid && returnData?.toDateString()) || "..."}
            </span>
          </p>
        </div>

        <div className={`${style["pick-return__meta"]} flex`}>
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

      {props?.showDropdown && (
        <div className={style.dropdown}>
          <TheButton
            type="secondary"
            text={`price: ${sortText}`}
            btnLink={`/`}
            className={style.dropdown__btn}
          />

          <ul
            className={`${style.dropdown__list} body-m capitalize`}
            onClick={sortHandler}
          >
            <li id="ascending-btn" className={`active`}>
              Low - High
            </li>
            <li id="descending-btn">High - Low</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopLegend;
