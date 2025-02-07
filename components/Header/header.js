import classes from './header.module.css';

import Image from 'next/image';
import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import profileImg from '@/assets/profile.jpeg';

import NavLink from './nav-link';

const Header = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Image src={logoImg} alt="Yash Logo Image" width={100} />
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink href="/services">services</NavLink>
                    </li>
                    <li>
                        <NavLink href="/projects">projects</NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.profile}>
                <Image src={profileImg} alt="Yash Profile Photo" width={80} height={80} />
            </div>
        </header>
    );
};

export default Header;
