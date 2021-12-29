import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';

export const Layout = (props) => {

    return (
        <>
            <MainNavigation />
            <div className={styles.main}>
                {props.children}
            </div>

        </>
    );
};

export default Layout;