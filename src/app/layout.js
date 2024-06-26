import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body className={poppins.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
