import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const jost = Jost({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Portfolio | Yash Pathik",
    description: "Web Developer Portfolio of Yash Pathik",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={jost.className}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
