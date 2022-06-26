import styles from '../Favorite/Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Favorite = () => {

    const favoriteCards = useSelector((state) => state.cards.filter(card => card.isFavorite === true));
    console.log(favoriteCards);
        return (
        <div>
            <PageTitle title={'Favorite'} />
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => <Card key={card.id} title={card.title} id={card.id} />)}
                </ul>
            </article>
        </div>
    )
};

export default Favorite;