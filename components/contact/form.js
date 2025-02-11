"use client";

import classes from "./form.module.css";

import { motion } from "motion/react";

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const [animate, setAnimate] = useState("");

    const isInvalid = (text) => {
        return text.trim().length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isInvalid(formData.name)) {
            setAnimate("name");
            setTimeout(() => setAnimate(""), 1000);
            return;
        }
        if (isInvalid(formData.email) || !formData.email.includes("@")) {
            setAnimate("email");
            setTimeout(() => setAnimate(""), 1000);
            return;
        }
        if (isInvalid(formData.subject)) {
            setAnimate("subject");
            setTimeout(() => setAnimate(""), 1000);
            return;
        }
        if (isInvalid(formData.message)) {
            setAnimate("message");
            setTimeout(() => setAnimate(""), 1000);
            return;
        }

        setStatus("sending");

        const response = await fetch("/api/contactme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setStatus("failed");
        }
    };

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
            onSubmit={handleSubmit}
        >
            <motion.p
                animate={
                    animate === "name"
                        ? { x: [-10, 10, -10, 10, 0], color: "#dc3545" }
                        : {}
                }
                transition={{ duration: 0.2 }}
            >
                <label htmlFor="name">name</label>
                <motion.input
                    animate={
                        animate === "name"
                            ? { backgroundColor: "#ee748050" }
                            : {}
                    }
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
            </motion.p>
            <motion.p
                animate={
                    animate === "email"
                        ? { x: [-10, 10, -10, 10, 0], color: "#dc3545" }
                        : {}
                }
                transition={{ duration: 0.2 }}
            >
                <label htmlFor="email">email</label>
                <motion.input
                    animate={
                        animate === "email"
                            ? { backgroundColor: "#ee748050" }
                            : {}
                    }
                    transition={{ duration: 0.2 }}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email *"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
            </motion.p>

            <motion.p
                animate={
                    animate === "subject"
                        ? { x: [-10, 10, -10, 10, 0], color: "#dc3545" }
                        : {}
                }
                transition={{ duration: 0.2 }}
            >
                <label htmlFor="subject">subject</label>
                <motion.input
                    animate={
                        animate === "subject"
                            ? { backgroundColor: "#ee748050" }
                            : {}
                    }
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    onChange={handleChange}
                    value={formData.subject}
                    required
                />
            </motion.p>
            <motion.p
                animate={
                    animate === "message"
                        ? { x: [-10, 10, -10, 10, 0], color: "#dc3545" }
                        : {}
                }
                transition={{ duration: 0.2 }}
            >
                <label htmlFor="message">message</label>
                <motion.textarea
                    animate={
                        animate === "message"
                            ? { backgroundColor: "#ee748050" }
                            : {}
                    }
                    transition={{ duration: 0.2 }}
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                    placeholder="Your Message *"
                    onChange={handleChange}
                    value={formData.message}
                    required
                ></motion.textarea>
            </motion.p>
            <p>
                <button className={classes.button}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                    <span className={classes.success}>
                        ✅ Thanks for reaching out! I'll get back to you soon.
                    </span>
                )}
                {status === "failed" && (
                    <span className={classes.failed}>
                        ❌ I&apos;m sorry, something went wrong. Please try
                        again.
                    </span>
                )}
            </p>
        </motion.form>
    );
};

export default ContactForm;
