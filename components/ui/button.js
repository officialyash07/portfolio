'use client';

import classes from './button.module.css';

import { motion } from 'motion/react';

const Button = ({ children, className, onClick }) => {
    return (
        <motion.button
            whileHover={{ color: '#0d0d0d', backgroundColor: '#fff7ec', transition: { type: 'tween' } }}
            whileTap={{ scale: 1.4 }}
            transition={{ type: 'spring' }}
            className={`${classes.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;
