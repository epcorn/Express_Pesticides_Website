// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import BookServiceModal from "../components/BookServiceModal";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "Express Pesticides",
  description: "Express Pesticides homepage", //added
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">
        <Navbar />
        <BookServiceModal />
        <Chatbot/>

        {/* This is still required to push content below the fixed h-16 navbar */}
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
