import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({children}) {
    return (
        <html lang="tr">
        <body className={`bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200 ${poppins.variable}`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
