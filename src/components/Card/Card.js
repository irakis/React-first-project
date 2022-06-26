import styles from '../Card/Card.module.scss';
import IsFavoriteButton from '../IsFavoriteButton/IsFavoriteButton';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {
    
    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        const favoriteCard = props.id
        dispatch(toggleFavorite(favoriteCard));
    }
    console.log(props);

    return (
        <>
            <li className={styles.card} onClick={handleClick}>{props.title} 
                <IsFavoriteButton isFavorite={props}/>
            </li>
        </>

    )
}

export default Card;
