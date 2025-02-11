"use client";

import classes from "./page.module.css";

import Image from "next/image";

import heroImage from "@/assets/character-1.png";
import blob from "@/assets/blob-1.svg";

import ResumeDownload from "@/components/Resume/resume";

import { motion } from "motion/react";

import Head from "next/head";

const AboutPage = () => {
    return (
        <main className={classes.main}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className={classes.hero}
            >
                <div className={classes.blob}>
                    <Image
                        src={blob}
                        alt="A background blob svg for the hero"
                        width={400}
                        priority
                    />
                </div>
                <div className={classes.heroImg}>
                    <Image
                        src={heroImage}
                        alt="A picture of hero"
                        width={400}
                        height={650}
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className={classes.content}
            >
                <h2>Yash Pathik</h2>
                <h3>Web Developer</h3>
                <p className={classes.about}>
                    I&apos;m a full-stack web developer passionate about
                    building scalable, high-performance applications. I
                    specialize in <span>React.js</span>, <span>Next.js</span>,{" "}
                    <span>Node.js</span>, and <span>AWS</span> cloud, crafting
                    modern web solutions with optimized performance and seamless
                    user experiences.
                </p>
                <div className={classes.details}>
                    <div>
                        <p>Age</p>
                        <span>27</span>
                    </div>
                    <div>
                        <p>Born In</p>
                        <span>Ujjain, India</span>
                    </div>
                    <div>
                        <p>Phone</p>
                        <span>+91 8076586547</span>
                    </div>
                </div>
                <ResumeDownload />
            </motion.div>
        </main>
    );
};

export default AboutPage;
