import styles from '../Column/Column.module.scss';

const Column = props => {
    console.log(props);
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>
        </article>
    );
};

export default Column;