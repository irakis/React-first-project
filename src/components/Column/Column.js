import styles from '../Column/Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

    const cards = useSelector(state => state.cards.filter(card =>card.columnId === props.id) );
    const columns = useSelector(state => state.columns );
    console.log(cards);
    
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + columns.icon} />{columns.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={cards.columnId} />
        </article>
    );
};

export default Column;