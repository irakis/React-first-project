import styles from '../Card/Card.module.scss';
import IsFavoriteButton from '../IsFavoriteButton/IsFavoriteButton';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {
    console.log('props w card: ',props);
    console.log('isFavorite', props.isFavorite);
    
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
