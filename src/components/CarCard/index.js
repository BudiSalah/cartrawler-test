import style from "./style.module.scss";
import LayoutCard from "./../../layouts/LayoutCard";
import TheButton from "./../units/TheButton";
import SvgDoor from "./../svg/SvgDoor";
import SvgPerson from "./../svg/SvgPerson";
import SvgBag from "./../svg/SvgBag";
import SvgFuel from "./../svg/SvgFuel";
import SvgSnowflake from "./../svg/SvgSnowflake";
import SvgTransmission from "./../svg/SvgTransmission";
import SvgAvis from "./../svg/SvgAvis";
import SvgHertz from "./../svg/SvgHertz";
import SvgAlamo from "./../svg/SvgAlamo";

function CarCard() {
  const Vendor = SvgAvis || SvgHertz || SvgAlamo;

  return (
    <LayoutCard>
      <figure className={`${style["figure-car"]}`}>
        <img
          src="https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600"
          alt="xx"
        />
      </figure>

      <div className={`${style.content} flex flex-col justify-between`}>
        <figure className={`${style.content__figure}`}>
          <Vendor />
        </figure>

        <hr style={{ marginTop: "10px" }} />

        <div className={`${style["car-meta"]} flex flex-row items-center`}>
          <h2 className="subtitle-xl capitalize">the car name</h2>
        </div>

        <p className={`${style.price} subtitle-m`}>$400</p>

        <div className={`${style.info} flex flex-row items-center`}>
          <div
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgSnowflake />
            <p className="capitalize">info about car</p>
          </div>

          <div
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgBag />
            <p className="capitalize">info about car</p>
          </div>

          <div
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgDoor />
            <p className="capitalize">info about car</p>
          </div>

          <div
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgFuel />
            <p className="capitalize">info about car</p>
          </div>

          <div
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgPerson />
            <p className="capitalize">info about car</p>
          </div>

          <div
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgTransmission />
            <p className="capitalize">info about car</p>
          </div>
        </div>

        <hr />

        <TheButton
          text="book now"
          type="primary"
          className={`${style.btn} items-self-end`}
        />
      </div>
    </LayoutCard>
  );
}

export default CarCard;
