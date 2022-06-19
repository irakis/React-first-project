import styles from '../About/About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return(
    <div>
        <PageTitle title={'About'} />
        <p className={styles.p}>Lorem ipsum</p>
    </div>
    )
}

export default About;