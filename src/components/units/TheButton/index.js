import style from "./style.module.scss";

function TheButton(props) {
  const btnClasses = [
    style.btn,
    props.className,
    props.type === "primary" && style["btn--primary"],
    props.type === "secondary" && style["btn--secondary"],
    props.type === "disabled" && style["btn--disabled"],
  ].join(" ");

  return <button className={`${btnClasses} body-l capitalize`}>primary</button>;
}

export default TheButton;
