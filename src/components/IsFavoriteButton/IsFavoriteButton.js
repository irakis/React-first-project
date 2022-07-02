import styles from '../IsFavoriteButton/IsFavoriteButton.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsReducer';

const IsFavoriteButton = (props) => {

        const dispatch = useDispatch();
        const handleClick = e => {
                e.preventDefault();
                const favoriteCard = props.id
                dispatch(toggleFavorite(favoriteCard));
        }

        return (
                <button className={styles.isFavoriteButton} onClick={handleClick}>
                        <span className={clsx("fa fa-star-o", props.isFavorite === true ? styles.isActive : styles.inActive)} />
                </button>
        );
};

export default IsFavoriteButton;