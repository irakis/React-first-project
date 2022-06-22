import styles from '../NavBar/NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <div className={styles.container}>
                <i className='fa fa-tasks'></i>
                <ul>
                    <li className={styles.li}>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                             to='/'>Home</NavLink></li>
                    <li className={styles.li}>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to='/favorite'>Favorite</NavLink></li>
                    <li className={styles.li}>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;