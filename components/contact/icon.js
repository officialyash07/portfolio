import classes from "./icon.module.css";

import Image from "next/image";

const Icon = ({ src, title, children }) => {
    return (
        <div className={classes.icon}>
            <p className={classes.image}>
                <Image src={src} alt="icon" width={32} height={32} />
            </p>
            {title && <p>{title}</p>}
            {children}
        </div>
    );
};

export default Icon;
