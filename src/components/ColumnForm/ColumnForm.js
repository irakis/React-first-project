
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label className={styles.label}>Title: </label><input type="text" className={styles.columnForm} value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Icon: </label><input type="text" className={styles.columnForm} value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>ADD COLUMN</Button>
        </form>
    );
};

export default ColumnForm; 