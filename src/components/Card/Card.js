import styles from '../Card/Card.module.scss';
import IsFavoriteButton from '../IsFavoriteButton/IsFavoriteButton';

import RemoveButton from '../RemoveButton/RemoveButton';

const Card = props => {

    return (
        <>
            <li className={styles.card} >{props.title}
                <IsFavoriteButton isFavorite={props.isFavorite} id={props.cardId} />
                <RemoveButton keyId={props.cardId} />
            </li>
        </>

    )
}

export default Card;
