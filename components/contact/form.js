"use client";

import classes from "./form.module.css";

import { motion } from "motion/react";

const ContactForm = () => {
    return (
        <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className={classes.form}
        >
            <p>
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    required
                />
            </p>
            <p>
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                />
            </p>

            <p>
                <label htmlFor="subject">subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    required
                />
            </p>
            <p>
                <label htmlFor="message">message</label>
                <textarea
                    name="subject"
                    id="message"
                    cols="20"
                    rows="5"
                    placeholder="Your Message *"
                    required
                ></textarea>
            </p>
            <p>
                <button className={classes.button}>Send Message</button>
            </p>
        </motion.form>
    );
};

export default ContactForm;
