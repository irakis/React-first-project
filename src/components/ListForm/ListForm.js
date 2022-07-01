import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addList } from '../../redux/listsReducer';

const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description ,id: shortid()}));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <label className={styles.label}>Title: </label><input type="text" className={styles.listForm} 
                value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Description: </label><input type="text" className={styles.listForm} 
                value={description} onChange={e => setDescription(e.target.value)} />
            <Button>ADD LIST</Button>
        </form>
    );
};

export default ListForm; 