import classes from '../styles/Header.module.css';

import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="yash logo" />
            </div>
            <nav className={classes.navbar}>
                <ul>
                    <li>
                        <a href="">home</a>
                    </li>
                    <li>
                        <a href="">about</a>
                    </li>
                    <li>
                        <a href="">services</a>
                    </li>
                    <li>
                        <a href="">projects</a>
                    </li>
                    <li>
                        <a href="">contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
