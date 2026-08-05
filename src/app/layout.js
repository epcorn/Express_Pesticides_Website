// app/layout.jsx

import "./globals.css";
import Navbar from "../components/Navbar";
import BookServiceModal from "../components/BookServiceModal";
import Chatbot from "../components/Chatbot"; // was giving error
import Script from "next/script";
import ErrorLogger from "@/components/ErrorLogger";

export const metadata = {
  title: "Express Pesticides", //changed
  description: "Express Pesticides homepage", //added
  icons: { icon: "/Epcorn_Logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hidden" suppressHydrationWarning>
      <body
        className="bg-white text-black overflow-x-hidden"
        suppressHydrationWarning>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <Navbar />
        <BookServiceModal />
        <Chatbot />
        <ErrorLogger />

        {/* This is still required to push content below the fixed h-16 navbar */}
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
