"use client";

import classes from "./service.module.css";

import Image from "next/image";

import { motion } from "motion/react";

const Service = ({ src, title, subtitle, count, description }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={classes.service}
        >
            <div className={classes.item1}>
                <Image src={src} alt="icon" width={80} />
                <div>
                    <p>{title}</p>
                    <h2>{subtitle}</h2>
                </div>
            </div>
            <p className={classes.item2}>
                <small>0</small>
                {count}
            </p>
            <p className={classes.item3}>{description}</p>
        </motion.article>
    );
};

export default Service;
