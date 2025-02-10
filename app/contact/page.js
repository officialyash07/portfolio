import classes from "./page.module.css";

import ContactForm from "@/components/contact/form";

import DisplayIcons from "@/components/contact/icons";

const ContactPage = () => {
    return (
        <main className={classes.main}>
            <div>
                <p className={classes.title}>
                    A passionate web developer committed to creating impactful
                    web solutions for you.
                </p>
                <DisplayIcons />
            </div>
            <div className={classes.formContainer}>
                <h1>Lets&apos;s Chat</h1>
                <p>Reach out for inquiries, collaborations or any questions.</p>
                <ContactForm />
            </div>
        </main>
    );
};

export default ContactPage;
