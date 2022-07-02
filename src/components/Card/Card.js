import styles from '../Card/Card.module.scss';
import IsFavoriteButton from '../IsFavoriteButton/IsFavoriteButton';
import shortid from 'shortid';

import RemoveButton from '../RemoveButton/RemoveButton';

const Card = props => {
    console.log('propsy w card: ',props);
    
    return (
        <>
            <li className={styles.card} >{props.title}
                <IsFavoriteButton isFavorite={props.isFavorite} id={props.cardId}/>
                <RemoveButton keyId={props.cardId} />
            </li>
        </>

    )
}

export default Card;
