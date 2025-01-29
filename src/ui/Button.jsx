import classes from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ children, className }) => {
    return <button className={`${classes.button} ${className}`}>{children}</button>;
};

export default Button;
