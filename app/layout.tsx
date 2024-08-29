import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Qr Generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="min-w-full overflow-x-hidden">
          <Navbar />
          {children}
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
