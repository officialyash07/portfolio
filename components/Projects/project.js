"use client";

import classes from "./project.module.css";

import Image from "next/image";
import Link from "next/link";

import arrowIcon from "@/assets/right-arrow.svg";

import { motion } from "motion/react";

const Project = ({ src, title, description, codeHref, linkHref }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={classes.project}
        >
            <div className={classes.projectImg}>
                <Link href={linkHref}>
                    <Image src={src} alt="project image" width={400} />
                </Link>
            </div>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>{description}</p>
            <div className={classes.viewBtn}>
                <Link href={codeHref}>
                    View Code
                    <Image src={arrowIcon} alt="arrow icon" width={20} />
                </Link>
            </div>
        </motion.div>
    );
};

export default Project;
