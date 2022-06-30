import styles from '../IsFavoriteButton/IsFavoriteButton.module.scss';
import clsx from 'clsx';

const IsFavoriteButton = (props) => {
        
        return (
                <button className={styles.isFavoriteButton}>
                        <span className={clsx("fa fa-star-o", props.isFavorite === true ? styles.isActive: styles.inActive)} />
                </button>
        );
};

export default IsFavoriteButton;