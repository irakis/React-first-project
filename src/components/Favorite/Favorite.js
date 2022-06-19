import styles from '../Favorite/Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
        <div>
            <PageTitle title={'Favorite'}/>
            <p className={styles.par}>Lorem ipsum</p>
        </div>
    )
};

export default Favorite;