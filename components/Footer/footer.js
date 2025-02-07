import classes from './footer.module.css';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../Icons/index';
import logoImg from '@/assets/logo.png';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>
                <small>Copyright &copy; 2025, Yash Pathik. All Rights Reserved</small>
            </p>
            <div className={classes.icons}>
                <Link href="https://www.facebook.com/yashpathik.07" target="_blank">
                    <FacebookIcon />
                </Link>
                <Link href="https://x.com/kingyash07" target="_blank">
                    <TwitterIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/yash-pathik-9b0372338/" target="_blank">
                    <LinkedinIcon />
                </Link>
                <Link href="/">
                    <Image src={logoImg} alt="Yash Logo Image" width={50} />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
