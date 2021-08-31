import css from "./Card.module.css";

const Card = (props) => {
  const cardClass = `${css.card} ${props.className}`;
  return <div className={cardClass}>{props.children}</div>;
};
export default Card;
