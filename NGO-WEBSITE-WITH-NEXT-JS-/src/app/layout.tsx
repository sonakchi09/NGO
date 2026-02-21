import "./globals.css";
import "aos/dist/aos.css";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import AOSProvider from "./AOSProvider";

export const metadata = {
  title: "Divya Prakash Foundation",
  description: "Together for change, building a brighter future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className="bg-white text-[#111D15]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
