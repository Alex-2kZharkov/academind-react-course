import css from './Card.module.css'

export const Card = (props) => {
    const cardClass = `${css.card} ${props.className}`;
    return (
        <div className={cardClass}>{props.children}</div>
    )
}