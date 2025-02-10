"use client";

import classes from "./page.module.css";

import Service from "@/components/service";

import websiteIcon from "@/assets/website.svg";
import ecommerceIcon from "@/assets/ecommerce.svg";
import appIcon from "@/assets/app.svg";
import awsIcon from "@/assets/aws.svg";
import consultIcon from "@/assets/consult.svg";
import supportIcon from "@/assets/support.svg";

import { motion } from "motion/react";

const ServicesPage = () => {
    return (
        <main className={classes.main}>
            <motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Web Services
            </motion.h1>
            <section className={classes.services}>
                <Service
                    src={websiteIcon}
                    title="website development"
                    subtitle="full stack"
                    count="1"
                    description="Providing end-to-end website development solutions designed to elevate your brand and drive success. Let’s craft a stunning, high-performance website that aligns perfectly with your business goals! 🚀"
                />
                <Service
                    src={ecommerceIcon}
                    title="E-Commerce Sites"
                    subtitle="User-friendly Interfaces"
                    count="2"
                    description="Designing immersive e-commerce experiences that captivate users and drive seamless engagement. Elevate your online store with innovation and efficiency! 🛍️"
                />
                <Service
                    src={appIcon}
                    title="web applications"
                    subtitle="dynamic solutions"
                    count="3"
                    description="Expert in effortless API integration, ensuring flawless connectivity and streamlined performance for your applications. 💻"
                />
                <Service
                    src={awsIcon}
                    title="AWS"
                    subtitle="Cloud Integration"
                    count="4"
                    description="Hosting, scalability, performance, deployment, security, API integration, databases, responsiveness, optimization, automation. ☁️"
                />
                <Service
                    src={consultIcon}
                    title="consultation"
                    subtitle="personalized service"
                    count="5"
                    description="Offering personalized consulting to uncover and implement powerful web solutions that drive success and efficiency. 📝"
                />
                <Service
                    src={supportIcon}
                    title="support services"
                    subtitle="ongoing assistance"
                    count="6"
                    description="Committed to providing expert support services, ensuring your website operates flawlessly and efficiently at all times. ⚡"
                />
            </section>
        </main>
    );
};

export default ServicesPage;
