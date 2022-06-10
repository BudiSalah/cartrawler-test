import style from "./style.module.scss";

function LayoutCard(props) {
  const cardClasses = [style.card, props.className].join(" ");

  return (
    <section className={`${cardClasses} flex justify-between items-stretch`}>
      {props.children}
    </section>
  );
}

export default LayoutCard;
