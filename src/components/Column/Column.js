import styles from '../Column/Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {
    console.log(props);
    console.log('props.cards: ', props.cards)
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.columnId} action={props.action} />
        </article>
    );
};

export default Column;