import styles from '../Column/Column.module.scss';
import Card from '../Card/Card';

const Column = props => {
    console.log(props);
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title}/>)}
            </ul>
        </article>
    );
};

export default Column;