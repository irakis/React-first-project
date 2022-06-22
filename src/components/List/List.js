import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getColumnsById, getListById } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const List = () => {
    const { listId } = useParams();
    
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsById(state, listId));
    console.log('listId: ',listId);

    return (
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}<span className={styles.span}>soon!</span></h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;