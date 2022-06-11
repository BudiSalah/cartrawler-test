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

function CarCard(props) {
  const Vendor = () => {
    return (
      {
        ALAMO: <SvgAlamo />,
        AVIS: <SvgAvis />,
        HERTZ: <SvgHertz />,
      }[props?.vendor?.["@Name"]] || ""
    );
  };

  const vehicle = props?.vehicleData?.Vehicle;

  function getCurrencySymbol(currency) {
    return (0)
      .toLocaleString(navigator.language, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\d/g, "")
      .trim();
  }

  const currencySymbol = getCurrencySymbol(
    props?.vehicleData?.TotalCharge["@CurrencyCode"]
  );

  return (
    <LayoutCard>
      <figure className={`${style["figure-car"]}`}>
        <img src={vehicle?.PictureURL} alt={vehicle?.VehMakeModel?.["@Name"]} />
      </figure>

      <div className={`${style.content} flex flex-col justify-between`}>
        <figure className={`${style.content__figure}`}>
          <Vendor />
        </figure>

        <hr style={{ marginTop: "10px" }} />

        <div className={`${style["car-meta"]} flex flex-row items-center`}>
          <h2 className="subtitle-xl capitalize">
            {vehicle?.VehMakeModel?.["@Name"]}
          </h2>
        </div>

        <p className={`${style.price} subtitle-m`}>
          {currencySymbol}
          {props?.vehicleData?.TotalCharge["@RateTotalAmount"]}
        </p>

        <div
          className={`${style.info} flex flex-row justify-between items-center`}
        >
          <div
            title="Air Condition"
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgSnowflake />
            <p className="capitalize">
              <span className="font-semi-bold">Air Condition: </span>
              {vehicle["@AirConditionInd"] ? "yes" : "no"}
            </p>
          </div>

          <div
            title="Baggage Quantity"
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgBag />
            <p className="capitalize">
              <span className="font-semi-bold">Baggage Quantity: </span>
              {vehicle["@BaggageQuantity"]}
            </p>
          </div>

          <div
            title="Door Count"
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgDoor />
            <p className="capitalize">
              <span className="font-semi-bold">Door Count: </span>
              {vehicle["@DoorCount"]}
            </p>
          </div>

          <div
            title="Fuel Type"
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgFuel />
            <p className="capitalize">
              <span className="font-semi-bold">Fuel Type: </span>
              {vehicle["@FuelType"]}
            </p>
          </div>

          <div
            title="Passenger Quantity"
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgPerson />
            <p className="capitalize">
              <span className="font-semi-bold">Passenger Quantity: </span>
              {vehicle["@PassengerQuantity"]}
            </p>
          </div>

          <div
            title="Transmission Type"
            className={`${style.info__item} flex flex-row items-center body-l`}
          >
            <SvgTransmission />
            <p className="capitalize">
              <span className="font-semi-bold">Transmission Type: </span>
              {vehicle["@TransmissionType"]}
            </p>
          </div>
        </div>

        <hr />

        <TheButton text="book now" type="primary" className={`${style.btn}`} />
      </div>
    </LayoutCard>
  );
}

export default CarCard;
