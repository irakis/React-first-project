import styles from '../RemoveButton/RemoveButton.module.scss';
import { useDispatch } from 'react-redux';
import { getCardToRemove, removeCard } from '../../redux/cardsReducer';

const RemoveButton = (props) =>{
    console.log('propsy w Removebutton: ',props);

    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault()
        const cardToRemove = props.keyId;
        console.log(cardToRemove);

        dispatch(removeCard(cardToRemove))
}

    return (
        <button className={styles.removeButton} onClick = {handleClick} >
            <span className={("fa fa-trash-o")}/>
        </button>
    )
}

export default RemoveButton