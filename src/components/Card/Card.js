import styles from '../Card/Card.module.scss';
import IsFavoriteButton from '../IsFavoriteButton/IsFavoriteButton';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsReducer';

const Card = props => {
    
    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        const favoriteCard = props.id
        dispatch(toggleFavorite(favoriteCard));
    }

    return (
        <>
            <li className={styles.card} onClick={handleClick}>{props.title} 
                <IsFavoriteButton isFavorite={props.isFavorite}/>
            </li>
        </>

    )
}

export default Card;
