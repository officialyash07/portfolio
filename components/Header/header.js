import classes from "./header.module.css";

import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import profileImg from "@/assets/profile.jpg";

const Header = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Image src={logoImg} alt="Yash Logo Image" width={150} />
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/services">services</Link>
                    </li>
                    <li>
                        <Link href="/projects">projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.profile}>
                <Image
                    src={profileImg}
                    alt="Yash Profile Photo"
                    width={100}
                    height={100}
                />
            </div>
        </header>
    );
};

export default Header;
