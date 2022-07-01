import styles from '../Favorite/Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Favorite = () => {

    const favoriteCards = useSelector((state) => state.cards.filter(card => card.isFavorite === true));
    if (favoriteCards.length == 0)
        return (
            <div>
                <PageTitle title={'Favorite'} />
                <article className={styles.empty}>
                    <p className={styles.text} >No cards...</p>
                </article>
            </div>
        )
    return (
        <div>
            <PageTitle title={'Favorite'} />
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)}
                </ul>
            </article>
        </div>
    )
};

export default Favorite;