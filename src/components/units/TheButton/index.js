import style from "./style.module.scss";
import { Link } from "react-router-dom";

function TheButton(props) {
  const btnClasses = [
    style.btn,
    props.className,
    props.type === "primary" && style["btn--primary"],
    props.type === "secondary" && style["btn--secondary"],
    props.type === "disabled" && style["btn--disabled"],
  ].join(" ");

  return (
    <Link to={props?.btnLink} className={`${btnClasses} body-l capitalize`}>
      {props.text}
    </Link>
  );
}

export default TheButton;
