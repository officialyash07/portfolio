"use client";

import classes from "./icons.module.css";

import Icon from "./icon";

import Link from "next/link";

import phoneIcon from "@/assets/phone.svg";
import emailIcon from "@/assets/email.svg";
import locationIcon from "@/assets/location.svg";
import { motion } from "motion/react";

const DisplayIcons = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className={classes.icons}
        >
            <Icon src={phoneIcon} title="+91-8076586547" />
            <Icon src={emailIcon} title="">
                <Link href="mailto:yashpathik.official@gmail.com">
                    yashpathik.official@gmail.com
                </Link>
            </Icon>
            <Icon src={locationIcon} title="Delhi, India" />
        </motion.div>
    );
};

export default DisplayIcons;
