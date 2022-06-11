import style from "./style.module.scss";
import LayoutMain from "../../layouts/LayoutMain";
import img404 from "./../../assets/images/bg/bg-404.svg";
import TheButton from "../../components/units/TheButton";

function Error() {
  return (
    <LayoutMain>
      <figure className={`${style.figure} flex flex-col justify-center`}>
        <img src={img404} alt="404 illustrator" />

        <TheButton
          className={style.btn}
          type="primary"
          text="back to home"
          btnLink="/"
        />
      </figure>
    </LayoutMain>
  );
}

export default Error;
