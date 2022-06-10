import style from "./style.module.scss";

function LayoutMain(props) {
  return <main className={`${style.main} container`}>{props.children}</main>;
}

export default LayoutMain;
