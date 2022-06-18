import styles from '../NavBar/NavBar.module.scss';

const NavBar = () => {

    return (
        <nav>
            <div className={styles.container}>
                <i className='fa fa-tasks'></i>
                <ul>
                    <li className={styles.li}><a href='#/'>Home</a></li>
                    <li><a href='#/favorite'>Favorite</a></li>
                    <li><a href='#/About'>About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;