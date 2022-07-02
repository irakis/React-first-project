import styles from '../Column/Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer';
import shortid from 'shortid';

const Column = props => {
    console.log('propsy w column: ', props);

    const cards = useSelector(state => getFilteredCards(state, props.id));
    console.log('filteredCards: ',cards)
            
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} cardId={card.id} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    );
};

export default Column;