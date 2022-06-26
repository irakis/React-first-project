import styles from '../IsFavoriteButton/IsFavoriteButton.module.scss';
import clsx from 'clsx';


const IsFavoriteButton = (props) => {
        console.log(props.isFavorite.favorite);
        
        return (
                <button className={styles.isFavoriteButton}>
                        <span className={clsx("fa fa-star-o", props.isFavorite.favorite===true ? styles.isActive: null)} />
                </button>
        );
};

export default IsFavoriteButton;