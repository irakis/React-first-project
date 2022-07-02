import styles from '../RemoveButton/RemoveButton.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsReducer';

const RemoveButton = (props) => {

    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault()
        const cardToRemove = props.keyId;
        dispatch(removeCard(cardToRemove));
    }

    return (
        <button className={styles.removeButton} onClick={handleClick} >
            <span className={("fa fa-trash-o")} />
        </button>
    )
}

export default RemoveButton