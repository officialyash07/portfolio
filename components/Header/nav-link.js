'use client';

import classes from './nav-link.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'motion/react';

const NavLink = ({ href, children }) => {
    const currentPath = usePathname();

    return (
        <Link href={href} className={`${classes.link} ${currentPath === href ? classes.active : ''}`}>
            {children}
            {currentPath === href && <motion.div layoutId="linkIndicator" className={classes.abc}></motion.div>}
        </Link>
    );
};

export default NavLink;
