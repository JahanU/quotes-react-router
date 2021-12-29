import styles from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

export const MainNavigation = (props) => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}> Best Quotes </div>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to="/quotes" activeClassName={styles.active}>Quotes</NavLink></li>
                    <li><NavLink to="/new-quote" activeClassName={styles.active}>New Quote</NavLink></li>

                </ul>
            </nav>
        </header >
    );
};

export default MainNavigation;